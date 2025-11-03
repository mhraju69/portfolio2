import React from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

export default function ProjectsSection() {
  return (
    <div className="App">
      <ScrollStack
        itemDistance={80}
        itemScale={0.05}
        itemStackDistance={20}
        stackPosition="30%"
        baseScale={0.9}
        rotationAmount={2}
        blurAmount={2}
        onStackComplete={() => console.log('Stack animation complete!')}
      >
        <ScrollStackItem>
          <h2>Card 1</h2>
          <p>This is the first card in the stack with smooth scrolling effects</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 2</h2>
          <p>This card will stack beautifully as you scroll down</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 3</h2>
          <p>Watch the scaling, rotation, and blur effects in action</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 4</h2>
          <p>Final card with the complete scroll-stack experience</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  )
}
