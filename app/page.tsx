import { SocketDisplay } from '../components/socket-display'

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Redux Toolkit and Socket.IO with Custom Hooks</h1>
      <SocketDisplay />
    </main>
  )
}

