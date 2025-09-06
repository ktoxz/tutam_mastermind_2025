export const verificationEmailTemplate = (name, otp) => {
  return `<div style="max-width:440px;margin:0 auto;padding:40px;background:#fff;border-radius:12px;box-shadow:0 6px 32px rgba(0,0,0,0.12);font-family:'Segoe UI',Roboto,Arial,sans-serif;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;">
                <span style="font-size:1.45rem;font-weight:700;color:#222;">Tự Tâm</span>
            </div>
            <h2 style="font-size:1.2rem;font-weight:600;margin-bottom:8px;color:#222;">Xác thực địa chỉ email của bạn</h2>
            <p style="font-size:1.05rem;color:#333;line-height:1.7;margin-bottom:20px;">
                Xin chào <b>${name}</b>,<br>
                Cảm ơn bạn đã đăng ký tài khoản <b>Tự Tâm</b>.<br>
                Sử dụng mã bên dưới để xác thực địa chỉ email của bạn:
            </p>
            <div style="text-align:center;margin:28px 0 22px 0;">
                <span style="display:inline-block;background:#f6f8fa;color:#1a2137;font-size:2.1rem;font-weight:700;letter-spacing:10px;padding:18px 36px;border-radius:14px;box-shadow:0 2px 12px rgba(40,40,80,0.05);">
                    ${otp}
                </span>
            </div>
            <p style="font-size:1rem;color:#3b3b3b;line-height:1.6;margin-bottom:10px;text-align:center;">
                Mã này sẽ hết hạn trong <b>5 phút</b>.<br>
                Vui lòng không chia sẻ mã này với bất kỳ ai vì lý do bảo mật.
            </p>
            <div style="border-top:1px solid #ececec;margin:32px 0 18px 0;"></div>
            <p style="font-size:0.96rem;color:#888;margin:0;">
                Nếu bạn không yêu cầu điều này, bạn có thể bỏ qua email này một cách an toàn.<br><br>
                Trân trọng,<br>
                Đội ngũ Tự Tâm<br>
            </p>
        </div>`
}

export const resetPasswordEmailTemplate = (name, resetLink) => {
  return `<div style="max-width:440px;margin:0 auto;padding:40px;background:#fff;border-radius:12px;box-shadow:0 6px 32px rgba(0,0,0,0.12);font-family:'Segoe UI',Roboto,Arial,sans-serif;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;">
                <span style="font-size:1.45rem;font-weight:700;color:#222;">Tự Tâm</span>
            </div>
            <h2 style="font-size:1.2rem;font-weight:600;margin-bottom:8px;color:#222;">Đặt lại mật khẩu của bạn</h2>
            <p style="font-size:1.05rem;color:#333;line-height:1.7;margin-bottom:20px;">
                Xin chào <b>${name}</b>,<br>
                Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản <b>Tự Tâm</b> của bạn.<br>
                Nhấp vào nút bên dưới để chọn mật khẩu mới:
            </p>
            <div style="text-align:center;margin:28px 0 22px 0;">
                <a href="${resetLink}" target="_blank" style="background:#1a2137;color:#fff;font-size:1.05rem;font-weight:600;text-decoration:none;padding:14px 28px;border-radius:10px;display:inline-block;box-shadow:0 2px 12px rgba(40,40,80,0.1);">
                    Đặt lại mật khẩu
                </a>
            </div>
            <p style="font-size:1rem;color:#3b3b3b;line-height:1.6;margin-bottom:10px;text-align:center;">
                Liên kết này sẽ hết hạn trong <b>10 phút</b>.<br>
                Vui lòng không chia sẻ liên kết này với bất kỳ ai vì lý do bảo mật.
            </p>
            <div style="border-top:1px solid #ececec;margin:32px 0 18px 0;"></div>
            <p style="font-size:0.96rem;color:#888;margin:0;">
                Nếu bạn không yêu cầu điều này, bạn có thể bỏ qua email này một cách an toàn.<br><br>
                Trân trọng,<br>
                Đội ngũ Tự Tâm<br>
            </p>
        </div>`
}
