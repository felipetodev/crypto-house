import { useEffect } from 'react'
import { appConfig } from './twilio/config'

export const useTwilio = () => {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.Twilio) {
        window.Twilio.FlexWebChat.MainHeader.defaultProps.titleText = 'LUUNA CHAT'
        window.Twilio.FlexWebChat.MainHeader.defaultProps.imageUrl = 'https://luuna-bucket.imgix.net/img/header-logo.svg'
        window.Twilio.FlexWebChat.createWebChat(appConfig()).then(webchat => {
          const { manager } = webchat
          // Posting question from preengagement form as users first chat message
          window.Twilio.FlexWebChat.Actions.on('afterStartEngagement', (payload) => {
            const { question } = payload.formData
            if (!question) return
            const { channelSid } = manager.store.getState().flex.session
            manager
              .chatClient.getChannelBySid(channelSid)
              .then(channel => channel.sendMessage(question))
          })

          manager.strings.WelcomeMessage = 'Luuna Chat 🌙'
          manager.strings.EntryPointTagline = 'Luuna Chat 🌙'
          manager.strings.Today = 'HOY'
          manager.strings.Yesterday = 'AYER'
          manager.strings.InputPlaceHolder = 'Envíanos un mensaje'
          manager.strings.PredefinedChatMessageAuthorName = 'Luuna Staff'
          manager.strings.PredefinedChatMessageBody = `Hola 👋
            No importa cuál sea la pregunta, aquí te la respondemos.
          `

          webchat.init()
        }).catch(error => console.warn(error))
      }
    }, 2000)
  }, [])
}
