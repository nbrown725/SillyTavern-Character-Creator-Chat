import { FC, useMemo, useState } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';
import { ProposalItem } from '../brainstorm-extract.js';
import { DiffView } from './CompareStatePopup.js';

interface ExtractReviewPopupProps {
  justification: string;
  items: ProposalItem[];
  isExtracting: boolean;
  onApply: (selectedIds: Set<string>) => void;
  onReExtract: (hint: string) => void;
  onCancel: () => void;
}

const KIND_BADGES: Record<ProposalItem['kind'], string> = {
  field: 'field',
  'draft-add': 'new draft',
  'greeting-change': 'greeting',
  'greeting-add': 'new greeting',
};

export const ExtractReviewPopup: FC<ExtractReviewPopupProps> = ({
  justification,
  items,
  isExtracting,
  onApply,
  onReExtract,
  onCancel,
}) => {
  // Everything starts checked: the common case is accepting the draft wholesale.
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set(items.map((item) => item.id)));
  const [hint, setHint] = useState('');

  const toggle = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allSelected = useMemo(
    () => items.length > 0 && items.every((item) => selectedIds.has(item.id)),
    [items, selectedIds],
  );

  const toggleAll = () => {
    setSelectedIds(allSelected ? new Set() : new Set(items.map((item) => item.id)));
  };

  return (
    <div className="extract-review-popup">
      <div className="popup_header">
        <h3>Draft Card from Conversation</h3>
      </div>

      {justification && <div className="extract-justification">{justification}</div>}

      {items.length === 0 ? (
        <p className="subtle" style={{ textAlign: 'center' }}>
          The model did not propose any changes. Try giving it a hint below about what to pull out.
        </p>
      ) : (
        <>
          <div className="extract-select-all">
            <label className="checkbox_label">
              <input type="checkbox" checked={allSelected} onChange={toggleAll} /> Select all
            </label>
          </div>
          <div className="extract-item-list">
            {items.map((item) => {
              const checked = selectedIds.has(item.id);
              return (
                <div key={item.id} className={`extract-item ${checked ? '' : 'deselected'}`}>
                  <label className="extract-item-header checkbox_label">
                    <input type="checkbox" checked={checked} onChange={() => toggle(item.id)} />
                    <span className="extract-item-label">{item.label}</span>
                    <span className="extract-item-badge">{KIND_BADGES[item.kind]}</span>
                    <span className={`extract-item-badge ${item.isNew ? 'is-new' : 'is-overwrite'}`}>
                      {item.isNew ? 'new' : 'overwrite'}
                    </span>
                  </label>
                  {item.isNew ? (
                    <div className="extract-item-new content">{item.after}</div>
                  ) : (
                    <>
                      <div className="compare-state-header">
                        <span>Current</span>
                        <span>Proposed</span>
                      </div>
                      <DiffView originalContent={item.before} newContent={item.after} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      <div className="extract-hint-row">
        <label htmlFor="crec-extract-hint">Not quite?</label>
        <STTextarea
          id="crec-extract-hint"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
          placeholder="e.g. use the second name we discussed, ignore the pirate tangent"
          rows={2}
          disabled={isExtracting}
        />
        <STButton onClick={() => onReExtract(hint)} disabled={isExtracting} title="Run the extraction again">
          {isExtracting ? (
            <>
              <i className="fa-solid fa-spinner fa-spin"></i> Working
            </>
          ) : (
            <>
              <i className="fa-solid fa-rotate-right"></i> Redo
            </>
          )}
        </STButton>
      </div>

      <div className="extract-actions">
        <STButton onClick={() => onApply(selectedIds)} disabled={isExtracting || selectedIds.size === 0}>
          <i className="fa-solid fa-check"></i> Apply Selected ({selectedIds.size})
        </STButton>
        <STButton onClick={onCancel} className="danger_button" disabled={isExtracting}>
          <i className="fa-solid fa-times"></i> Cancel
        </STButton>
      </div>
    </div>
  );
};
