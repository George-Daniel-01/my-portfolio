// Shared Clerk appearance config so the auth UI matches the portfolio theme
// and stays in sync across layout, sign-in, and sign-up pages.
export const clerkVariables = {
  colorPrimary: '#6f1cd7',
  colorBackground: '#130b1c',
  colorForeground: '#ffffff',
  colorMutedForeground: '#FFFFFF99',
  colorInput: '#0b040c',
  colorInputForeground: '#ffffff',
  colorBorder: '#ffffff15',
  borderRadius: '8px',
  fontFamily: 'Poppins, sans-serif',
};

export const clerkElements = {
  card: 'border border-[#ffffff15] shadow-none',
  headerTitle: 'font-clashbold',
  formButtonPrimary: 'bg-[#6f1cd7] hover:bg-[#5a16b0]',
  footerActionLink: 'text-[#6f1cd7]',
};

export const clerkAuthPageElements = {
  card: 'border border-[#ffffff15] shadow-none bg-[#130b1c]',
  socialButtonsBlockButton:
    'bg-[#0b040c] border border-[#ffffff15] text-white hover:bg-[#130b1c] transition-colors',
  formButtonPrimary: 'bg-[#6f1cd7] hover:bg-[#5a16b0]',
  headerTitle: 'font-clashbold text-white',
  headerSubtitle: 'text-[#FFFFFF99]',
  footerActionLink: 'text-[#6f1cd7]',
  dividerLine: 'bg-[#ffffff15]',
  dividerText: 'text-[#FFFFFF99]',
};
