import React from 'react';
import { inviteFriendsViaWhatsApp } from './services/whatsapp';

const WhatsAppInvite = () => {
  const handleInvite = () => {
    const inviteLink = `${window.location.origin}/shared-cart/${Date.now()}`; // Generate a unique link
    inviteFriendsViaWhatsApp(inviteLink);
  };

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Invite Friends to Shop Together</h2>
      <p className="mb-4">Share your cart with friends and family via WhatsApp!</p>
      <button
        onClick={handleInvite}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Invite via WhatsApp
      </button>
    </div>
  );
};

export default WhatsAppInvite;
