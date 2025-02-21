export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen p-8">
      <div className="grid gap-8 items-start justify-center h-full">
        {/* Colors - main */}
        <div className="grid gap-4 bg-blue-50 p-8 rounded-xl">
          <div className="text-2xl font-bold text-dark">Colors - Main</div>
          <div className="grid grid-cols-4 gap-2 w-96">
            <div className="flex flex-col gap-2">
              <div className="bg-primary w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Primary</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-primary-light w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Primary Light</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-secondary w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Secondary</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-tertiary w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Tertiary</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-success w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Success</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-success-light w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Success Light</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-error w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Error</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-error-light w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Error Light</div>
            </div>
          </div>
        </div>

        {/* Colors - additionally */}
        <div className="grid gap-4 bg-blue-50 p-8 rounded-xl">
          <div className="text-2xl font-bold text-dark">
            Colors - Additionally
          </div>
          <div className="grid grid-cols-4 gap-2 w-96">
            <div className="flex flex-col gap-2">
              <div className="bg-dark w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Dark</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-dark-light w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Dark Light</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-dark-secondary w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Dark Secondary</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-gray w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Gray</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-gray-medium w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Gray Medium</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-gray-light w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Gray Light</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-gray-lighter w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Gray Lighter</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-light w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Light</div>
            </div>
          </div>
        </div>

        {/* Colors - typography */}
        <div className="grid gap-4 bg-blue-50 p-8 rounded-xl">
          <div className="text-2xl font-bold text-dark">
            Colors - Typography
          </div>
          <div className="grid grid-cols-4 gap-2 w-96">
            <div className="flex flex-col gap-2">
              <div className="bg-typography-dark w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Dark</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-typography-secondary w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Secondary</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-typography-light w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Light</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-typography-lighter w-full h-8 rounded-xl" />
              <div className="text-dark text-sm p-1">Lighter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
