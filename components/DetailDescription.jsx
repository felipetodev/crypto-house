import { useState } from 'react'
import { Button } from 'components/Button'

export function DetailDescription () {
  const [toggle, setToggle] = useState(false)

  const maxHeight = toggle
    ? 'max-h-full'
    : 'max-h-[255px]'

  const linearGradient = toggle
    ? ''
    : 'before:bg-hero-pattern before:-top-16 before:w-screen before:h-12 before:absolute before:-inset-1'

  return (
    <div className='mb-8 overflow-hidden'>
    <p className={`mb-6 ${maxHeight} overflow-hidden`}>
      <span className='my-4 text-gray-700 font-medium flex'>
        PRECIOSA PLANTA BAJA CON ENTRADA PRIVADA, AMUEBLADA CON GUSTO Y LISTA PARA VIVIR O COMO INVERSIÓN.
      </span>
      {/* Markdown description */}
      {`
        La vivienda es una preciosa planta baja con entrada particular y doble puerta con espacio entre ambas para dejar tu bici o patinete o lo que tu quieras.
        
        Esta completamente reformada y amueblada con mucho gusto.
        Al entrar nos encontramos con el salón comedor muy espacioso y decorado tipo industrial.
        Tienes un espacio perfecto para trabajar desde casa. La cocina integrada al comedor, está dotada de nevera microondas, horno, vitrocerámica, cafetera nespresso, lavavajillas y todos los enseres necesarios para cocinar.
        
        Hay un pequeño lavadero con lavadora tendedero y espacio para secadora si quieres ponértela.
        
        El cuatro de baño también está reformado con ducha. En el distribuidor que da acesso a la habitación tienes un armario empotrado de 2 puertas para almacenaje o vestidor y en la habitación doble otro armario y una cajonera grande.
        
        Está ubicada en una zona llena de vida, con comercios de esos que nos gusta entrar, restaurantes con terrazas interiores, bares de aperitivos y supermercados. También tienes una parada de metro al lado y autobuses a1 m.
        
        
        Si quieres invertir en Barcelona, es una pieza muy atractiva. Por index gtos el alquiler máximo asciende a 1.150.-€/Mes.
        
        • Para calcular el nuevo precio de alquiler nos basamos en el índice de referencia de precios de alquiler publicado según ley 11/2020, 18 de septiembre.
        
        
        RESUMEN
        
        Planta baja de 72 m2 construidos
        Salón comedor amueblado
        Zona espaciosa para trabajar desde casa
        Cocina integrada y completamente equipada
        1 habitación doble
        1 cuarto de baño con ducha
        Aire acondicionado
        Calefacción gas natural
        Armarios empotrados
      `}
    </p>

    <Button
      href
      onClick={() => setToggle(!toggle)}
      className={`${linearGradient} relative bg-transparent px-0 border-white cursor-pointer`}
    >
      {toggle ? 'Cerrar' : 'Leer más'}
    </Button>
  </div>
  )
}
