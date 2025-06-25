import { useRef, useCallback } from 'react';

export const useNotification = () => {
    const notificationRef = useRef(null);
    const timeoutRef = useRef(null);

    const showNotification = useCallback((message, type = 'success', duration = 3000) => {
        // Limpiar timeout anterior
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Crear elemento de notificación si no existe
        if (!notificationRef.current) {
            notificationRef.current = document.createElement('div');
            notificationRef.current.style.cssText =`
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                padding: 12px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 300px;
            `;
            document.body.appendChild(notificationRef.current);
        }

        // Configurar color según el tipo
        const backgroundColor = {
            success: '#28a745',
            error: '#dc3545',
            info: '#007bff',
            warning: '#ffc107'
        }[type] || '#28a745';

        notificationRef.current.style.backgroundColor = backgroundColor;
        notificationRef.current.textContent = message;

        // Mostrar notificación con animación
        setTimeout(() => {
            if (notificationRef.current) {
                notificationRef.current.style.transform = 'translateX(0)';
            }
        }, 100);

        // Ocultar después del tiempo especificado
        timeoutRef.current = setTimeout(() => {
            if (notificationRef.current) {
                notificationRef.current.style.transform = 'translateX(100%)';
                
                // Remover del DOM después de la animación
                setTimeout(() => {
                    if (notificationRef.current && document.body.contains(notificationRef.current)) {
                        document.body.removeChild(notificationRef.current);
                        notificationRef.current = null;
                    }
                }, 300);
            }
        }, duration);
    }, []);

    return { showNotification };
};