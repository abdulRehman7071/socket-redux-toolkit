'use client'

import { useSocketData } from '../hooks/use-socket-data'

export function SocketDisplay() {
  const { connected, data } = useSocketData()

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Socket Status: 
        <span className={connected ? "text-green-500" : "text-red-500"}>
          {connected ? ' Connected' : ' Disconnected'}
        </span>
      </h2>
      <h3 className="text-lg font-medium mb-2">Received Data:</h3>
      {data.length === 0 ? (
        <p className="text-gray-500">No data received yet.</p>
      ) : (
        <ul className="space-y-2">
          {data.map((item, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded">
              {JSON.stringify(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

