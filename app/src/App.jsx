import { useMemo } from "react"
import { BlogProvider } from "src/context/Blog"
import { Router } from "src/router"
import { ConnectionProvider , WalletProvider } from "@solana/wallet-adapter-react"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import "./App.css"


export const App = () => {
const endpoint  =  "https://api.devnet.solana.com"
const walets = useMemo(
  () => [
    new PhantomWalletAdapter(),
  ],
)
  return (
    <ConnectionProvider endpoint =  {endpoint}>
      <WalletProvider wallets={walets} autoConnect >

    <BlogProvider>
      <Router />
    </BlogProvider>
      </WalletProvider>
</ConnectionProvider>
  )
}
