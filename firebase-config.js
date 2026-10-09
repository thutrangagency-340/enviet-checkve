// Điền từ Firebase Console → Project settings → Your apps → Web app.
// Đây là cấu hình công khai của Firebase, KHÔNG thêm khóa bí mật hay private key.
export const firebaseConfig = {
  apiKey: 'DIEN_API_KEY',
  authDomain: 'DIEN_PROJECT_ID.firebaseapp.com',
  projectId: 'DIEN_PROJECT_ID',
  storageBucket: 'DIEN_PROJECT_ID.firebasestorage.app',
  messagingSenderId: 'DIEN_MESSAGING_SENDER_ID',
  appId: 'DIEN_APP_ID'
};
// UID duy nhất được phép tạo và cập nhật phiếu.
export const adminUid = 'DIEN_ADMIN_UID';
