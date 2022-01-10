import { brandedColors } from './chat-ui'

export const appConfig = () => ({
  accountSid: process.env.ACCOUNT_SID,
  flexFlowSid: process.env.FLOW_SID,
  colorTheme: {
    overrides: brandedColors
  },
  logLevel: 'debug',
  context: {
    locationOrigin: window.location.origin,
    friendlyName: 'Invitado'
  }
})

/*
  startEngagementOnInit: false,
  preEngagementConfig: {
    description: "Antes de continuar proveenos la siguiente información porfavor",
    fields: [
      {
        label: "Nombre",
        type: "InputItem",
        attributes: {
          name: "friendlyName",
          type: "text",
          required: true
        }
      },
      {
        label: "Correo",
        type: "InputItem",
        attributes: {
          name: "email",
          type: "email",
          placeholder: "Ingresa tu email",
          required: true,
          readOnly: false
        }
      },
    ],
    footerLabel: "I am a footer",
    submitLabel: "Continuar!"
  }
  */
