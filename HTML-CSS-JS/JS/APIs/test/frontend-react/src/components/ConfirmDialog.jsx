import React from 'react';

export default function ConfirmDialog({ open, message, onConfirm, onCancel }) {
  return (
    <div className={`confirm-overlay ${open ? 'open' : ''}`}>
      <div className="confirm-box">
        <h6>Confirmar eliminación</h6>
        <p>{message}</p>
        <div className="confirm-actions">
          <button className="btn-secondary" onClick={onCancel}>Cancelar</button>
          <button className="btn-danger" onClick={onConfirm}>Sí, eliminar</button>
        </div>
      </div>
    </div>
  );
}
