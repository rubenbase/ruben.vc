interface Props {
  title: string
  description: React.ReactNode
}

const Section = ({ title, description }: Props) => {
  return (
    <section className="bg-card rounded-lg space-y-4">
      <h2 className="text-lg font-bold">{title}</h2>
      {description}
    </section>
  )
}

export default Section
