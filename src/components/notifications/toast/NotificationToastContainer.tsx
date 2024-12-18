```typescript
import React from 'react';
import { NotificationToast } from './NotificationToast';
import { useNotificationStore } from '../../../store/notificationStore';

export function NotificationToastContainer() {
  const { notifications, dismissNotification } = useNotificationStore();
  const unreadNotifications = notifications.filter(n => !n.read);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {unreadNotifications.slice(0, 3).map((notification) => (
        <NotificationToast
          key={notification.id}
          message={notification.content}
          onDismiss={() => dismissNotification(notification.id)}
        />
      ))}
    </div>
  );
}
```