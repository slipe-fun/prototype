import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to SProto</h1>
      <Button className="font-semibold text-5xl h-32">Click me</Button>
    </div>
  )
} 