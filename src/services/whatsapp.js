// This is a mock WhatsApp integration service. In a real application, you would
// integrate with the actual WhatsApp Business API.

export const shareCartViaWhatsApp = (cartItems) => {
    const message = encodeURIComponent(`Check out my shopping cart!\n\n${cartItems.map(item => `${item.name} - $${item.price}`).join('\n')}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
};
  
export const inviteFriendsViaWhatsApp = (inviteLink) => {
    const message = encodeURIComponent(`Join my shopping session! Click here: ${inviteLink}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
};
