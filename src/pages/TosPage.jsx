import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted lift-on-hover mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="font-display text-4xl font-bold text-ink mb-6">Terms of Service</h1>
        <p className="text-muted text-sm mb-8">Last updated: June 2025</p>
        <div className="space-y-6 text-ink/80 leading-relaxed">
          <p>By accessing this website you agree to these terms. The content provided is for informational purposes only. Huafengsheng reserves the right to update pricing, product availability, and specifications without notice.</p>
          <h2 className="font-display text-xl font-semibold text-ink mt-8">Limitation of Liability</h2>
          <p>HFS is not liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.</p>
          <h2 className="font-display text-xl font-semibold text-ink mt-8">Governing Law</h2>
          <p>These terms are governed by the laws of the People's Republic of China.</p>
          <h2 className="font-display text-xl font-semibold text-ink mt-8">Contact</h2>
          <p>Questions? Reach us via WhatsApp at +63 976 630 4431.</p>
        </div>
      </div>
    </div>
  )
}
