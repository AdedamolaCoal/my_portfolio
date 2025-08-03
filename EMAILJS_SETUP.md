# EmailJS Setup Guide

## 🎯 How to Set Up EmailJS for Contact Form

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account (dammy0075@gmail.com)
5. Note down the **Service ID** (you'll need this)

### Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}} Hello Damola, You have
received a new message from your portfolio website: Name: {{from_name}} Email:
{{from_email}} Subject: {{subject}} Message: {{message}} --- This message was
sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID**

### Step 4: Get Your User ID

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (User ID)

### Step 5: Update the Code

Replace these placeholders in `src/components/Contact.tsx`:

```typescript
// Replace these with your actual EmailJS credentials
await emailjs.send(
  "YOUR_SERVICE_ID", // ← Replace with your Service ID
  "YOUR_TEMPLATE_ID", // ← Replace with your Template ID
  templateParams,
  "YOUR_USER_ID" // ← Replace with your Public Key
);
```

### Step 6: Initialize EmailJS

Add this to your `src/main.tsx`:

```typescript
import emailjs from "emailjs-com";

// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your Public Key
```

## 🔧 Alternative: Formspree (Even Easier)

If EmailJS seems complex, you can use Formspree:

1. Go to [Formspree.io](https://formspree.io/)
2. Create account and get your form endpoint
3. Replace the form action in Contact.tsx:

```typescript
// Replace the EmailJS code with:
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

## 📧 Testing

1. Fill out the contact form
2. Submit the message
3. Check your email (dammy0075@gmail.com)
4. You should receive the message!

## 🛡️ Security Notes

- EmailJS is safe for frontend use
- No sensitive data is exposed
- Free tier allows 200 emails/month
- Upgrade for more emails/features

## 🚀 Features Added

- ✅ Real email sending functionality
- ✅ Loading states and error handling
- ✅ Form validation
- ✅ Success/error messages
- ✅ Professional user experience
