'use client';

import { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import type { Alert } from '@/lib/dashboard-data';

interface UseAlertNotificationsOptions {
  enabled?: boolean;
}

export function useAlertNotifications(
  alerts: Alert[],
  options: UseAlertNotificationsOptions = {}
) {
  const { enabled = true } = options;
  const previousAlertIdsRef = useRef<Set<string>>(new Set());
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (!enabled) return;

    // On first render, just store the initial alert IDs without showing toasts
    if (isFirstRenderRef.current) {
      previousAlertIdsRef.current = new Set(alerts.map(a => a.id));
      isFirstRenderRef.current = false;
      return;
    }

    // Find new alerts that weren't in the previous set
    const newAlerts = alerts.filter(
      alert => !previousAlertIdsRef.current.has(alert.id)
    );

    // Show toast for each new alert (only critical and high severity)
    newAlerts.forEach(alert => {
      if (alert.severity === 'critical' || alert.severity === 'high') {
        const toastOptions = {
          duration: alert.severity === 'critical' ? 8000 : 5000,
          action: {
            label: 'View',
            onClick: () => {
              window.location.href = alert.actionUrl;
            },
          },
        };

        if (alert.severity === 'critical') {
          toast.error(alert.title, {
            description: alert.description,
            ...toastOptions,
          });
        } else {
          toast.warning(alert.title, {
            description: alert.description,
            ...toastOptions,
          });
        }
      }
    });

    // Update the previous alert IDs
    previousAlertIdsRef.current = new Set(alerts.map(a => a.id));
  }, [alerts, enabled]);
}
