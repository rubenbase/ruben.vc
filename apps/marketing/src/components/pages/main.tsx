import Section from '../Section'

export default function MainSection() {
  return (
    <>
      <Section
        title="Now"
        description={
          <Description>
            <p>
              I work as a frontend engineer at Bird{' '}
              <span className="text-xs">(YC S16)</span>.
            </p>
            <p>
              I like to build things focusing on performance, scalability, and clean code.
              I am product-centric and think deeply about the user interface, its
              appearance, functionality, and behavior.
            </p>
          </Description>
        }
      />
    </>
  )
}

const Description = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-muted-foreground space-y-4">{children}</div>
}
