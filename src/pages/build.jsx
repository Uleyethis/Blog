import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      { children &&
        <Card.Description>{children}</Card.Description>
      }
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Uley</title>
        <meta
          name="description"
          content="My build, and the software tools I'm going to use as I go."
        />
      </Head>
      <SimpleLayout
        title="My build, and the software tools I'm going to use as I go."
        intro="Just in case any one is wondering what I'm workign off of, this is my baby at the moment."
      >
        <div className="space-y-20">
          <ToolsSection title="Computer">
            <Tool title="CPU:AMD Ryzen 9 5950X 16-Core 3.4GHz"></Tool>
            <Tool title="Motherboard: ASUS ROG Strix X570-R Gaming"></Tool>
            <Tool title="RAM: 32GB (2x16GB) Corair Vengeance DDR4-3200"></Tool>
            <Tool title="GPU: ASUS ROG Strix Geforce RTX 3080Ti"></Tool>
            <Tool title="PSU: ASUS ROG Strix 1000W 80 PLUS Gold PSU"></Tool>
            <Tool title="Case: Cooler Master HAF 932 Advanced Full-Tower Case"></Tool>
          </ToolsSection>
          <ToolsSection title="Other Components">
            <Tool title="Monitor(s): 3x SAMSUNG 27-inch Odyssey G7 - QHD 1000R Curved Gaming Monitor 240hz "></Tool>
            <Tool title="Keyboard: Keychron Q1"></Tool>
            <Tool title="Mouse: Razer Naga Pro "></Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              This has taken over as my development environment of choice. So many great extensions can make This 
              as powerful as you need it to be.
            </Tool>
            <Tool title="Unity 2021 LTS">
              I will be using this until the newest LTS version comes out mid 2023. This is just 
              so I can have a stable release to build my knowledge upon.
            </Tool>
            <Tool title="Unreal Engine 5">
              I will be using the latest version of Unreal Engine 5 to start my learning.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="A Notepad / Sketchbook">
              Even thought I am all for tech answers and tools for most things, nothing really 
              beats writing things down on paper to get the though process working.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
