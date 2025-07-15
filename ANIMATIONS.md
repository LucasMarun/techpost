# 🎬 Sistema de Animações Energy Tech Post

Este documento descreve o sistema completo de animações implementado no site da Energy Tech Post, utilizando GSAP (GreenSock Animation Platform) para criar experiências visuais modernas e envolventes.

## 🚀 Características

- ✨ **Typewriter Effect**: Texto aparece letra por letra
- 🎭 **Scroll Reveal**: Elementos entram com fade + deslocamento
- 🎯 **Hover Animations**: Microinterações suaves
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em mobile e desktop
- ⚡ **Performance Otimizada**: Usando GSAP para animações fluidas
- ♿ **Acessibilidade**: Respeita `prefers-reduced-motion`

## 📦 Componentes Disponíveis

### AnimatedText
Efeito de texto digitado letra por letra.

```tsx
import { AnimatedText, AnimatedSplitText } from '@/components/animations';

// Texto simples
<AnimatedText 
  text="Seu texto aqui"
  speed={0.05}
  delay={0.2}
/>

// Texto com split por caracteres
<AnimatedSplitText 
  text="Texto animado"
  stagger={0.05}
  delay={0.2}
/>
```

### AnimatedSection
Wrapper para scroll reveal com fade e deslocamento.

```tsx
<AnimatedSection 
  direction="up"      // 'up' | 'down' | 'left' | 'right'
  distance={50}       // Distância em pixels
  duration={0.8}      // Duração da animação
  delay={0}           // Delay antes da animação
>
  <p>Conteúdo aqui</p>
</AnimatedSection>
```

### AnimatedGrid
Grid com animação escalonada dos filhos.

```tsx
<AnimatedGrid 
  cols={3}
  stagger={0.15}
  delay={1.2}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimatedGrid>
```

### AnimatedButton
Botão com hover animado e efeito ripple.

```tsx
<AnimatedButton 
  rippleEffect={true}
  className="custom-class"
>
  Clique aqui
</AnimatedButton>
```

### AnimatedIcon
Ícones com hover animado e entrada suave.

```tsx
<AnimatedIcon 
  hoverRotation={15}
  hoverScale={1.1}
>
  <Icon className="w-6 h-6" />
</AnimatedIcon>
```

### AnimatedNumber
Contagem animada de números.

```tsx
<AnimatedNumber 
  end={100}
  suffix="+"
  duration={2}
  delay={0.5}
/>

<AnimatedPercentage 
  percentage={85}
  duration={2.5}
/>
```

## 🎣 Hooks Disponíveis

### useTypewriter
```tsx
const { displayText, isComplete, containerRef } = useTypewriter({
  text: "Seu texto",
  speed: 0.05,
  delay: 0,
  startOnInView: true
});
```

### useScrollReveal
```tsx
const { ref } = useScrollReveal({
  direction: 'up',
  distance: 50,
  duration: 0.8,
  threshold: 0.2
});
```

### useHoverAnimation
```tsx
const elementRef = useHoverAnimation({
  scale: 1.05,
  rotate: 10,
  duration: 0.3
});
```

### useCounterAnimation
```tsx
const { displayValue, elementRef } = useCounterAnimation({
  start: 0,
  end: 100,
  duration: 2,
  formatNumber: (value) => `${Math.round(value)}+`
});
```

## 🎨 Classes CSS Utilitárias

### Performance
```css
.will-change-transform  /* Otimização para transform */
.will-change-opacity    /* Otimização para opacity */
```

### Animações Base
```css
.animate-fade-in       /* Fade in suave */
.animate-slide-up      /* Slide para cima */
.animate-slide-down    /* Slide para baixo */
.animate-slide-left    /* Slide para esquerda */
.animate-slide-right   /* Slide para direita */
```

### Hover Effects
```css
.hover-lift           /* Elevação no hover */
.icon-hover          /* Rotação de ícones */
.card-hover          /* Efeito para cards */
```

## 📱 Responsividade

### Mobile Optimizations
```css
/* Reduz distância de animação no mobile */
@media (max-width: 768px) {
  .mobile-reduce-distance {
    transform: translateY(20px) !important;
  }
  
  .animate-on-mobile-reduce {
    animation-duration: 0.4s !important;
  }
}
```

### Acessibilidade
```css
/* Respeita preferências de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## ⚡ Performance Tips

1. **GSAP está configurado para performance máxima**
2. **Will-change é aplicado automaticamente durante animações**
3. **IntersectionObserver é usado para trigger eficiente**
4. **Animações são pausadas quando elementos saem da tela**

## 🎯 Exemplos de Uso

### Hero Section
```tsx
<AnimatedSection direction="up" distance={60} duration={1}>
  <h1>
    <AnimatedSplitText
      text="Título principal"
      delay={0.2}
      stagger={0.03}
    />
  </h1>
  
  <AnimatedSection delay={2}>
    <p>Descrição</p>
  </AnimatedSection>
  
  <AnimatedButton delay={2.5}>
    Call to Action
  </AnimatedButton>
</AnimatedSection>
```

### Cards Grid
```tsx
<AnimatedGrid cols={3} stagger={0.2}>
  {items.map((item, index) => (
    <Card key={index} className="card-hover">
      <AnimatedIcon hoverRotation={360}>
        <item.icon />
      </AnimatedIcon>
      
      <AnimatedNumber 
        end={item.number}
        delay={index * 0.3}
      />
    </Card>
  ))}
</AnimatedGrid>
```

## 🔧 Customização

### Modificar Timings Globais
Edite as variáveis CSS em `src/index.css`:

```css
:root {
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Criar Nova Animação
```tsx
// Hook personalizado
export const useCustomAnimation = () => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(elementRef.current, 
      { /* estado inicial */ },
      { /* estado final */ }
    );
  }, []);
  
  return elementRef;
};
```

## 🐛 Troubleshooting

### Animações não aparecem
1. Verifique se GSAP está instalado
2. Confirme que o elemento tem dimensões
3. Verifique o threshold do IntersectionObserver

### Performance lenta
1. Use `will-change` para elementos animados
2. Evite animar muitos elementos simultaneamente
3. Considere reduzir a duração no mobile

---

## 📝 Nota Final

Este sistema de animações foi desenvolvido com foco em performance, acessibilidade e experiência do usuário. Todas as animações respeitam as preferências de movimento reduzido e são otimizadas para diferentes dispositivos.

Desenvolvido com ❤️ para o projeto Energy Tech Post Infraestrutura 