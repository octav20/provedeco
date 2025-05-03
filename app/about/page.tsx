import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre Nosotros</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Somos una empresa dedicada a ofrecer productos de alta calidad con más de 10 años de experiencia en el
              mercado.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/placeholder.svg?height=400&width=400"
            width={400}
            height={400}
            alt="Nuestra Empresa"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Nuestra Misión</h3>
                  <p className="text-muted-foreground">
                    Proporcionar productos de calidad que mejoren la vida de nuestros clientes, manteniendo siempre los
                    más altos estándares.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Nuestra Visión</h3>
                  <p className="text-muted-foreground">
                    Ser líderes en el mercado, reconocidos por la excelencia de nuestros productos y el servicio al
                    cliente.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Nuestros Valores</h3>
                  <p className="text-muted-foreground">
                    Integridad, compromiso, innovación y respeto son los pilares fundamentales de nuestra empresa.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nuestra Historia</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Un viaje de dedicación y crecimiento
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Los inicios</h3>
              <p className="text-muted-foreground">
                Fundada en 2010 por un grupo de emprendedores con una visión clara de ofrecer productos de calidad
                superior.
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">Crecimiento</h3>
              <p className="text-muted-foreground">
                En 2015 expandimos nuestras operaciones a nivel nacional, abriendo sucursales en las principales
                ciudades del país.
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">Actualidad</h3>
              <p className="text-muted-foreground">
                Hoy somos líderes en el mercado, con presencia internacional y un compromiso inquebrantable con la
                calidad.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nuestro Equipo</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Profesionales dedicados a la excelencia
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="flex flex-col items-center space-y-3">
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=Miembro+${member}`}
                  width={200}
                  height={200}
                  alt={`Miembro del equipo ${member}`}
                  className="rounded-full object-cover"
                />
                <h3 className="text-lg font-bold">Nombre Apellido</h3>
                <p className="text-sm text-muted-foreground">Cargo / Posición</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
