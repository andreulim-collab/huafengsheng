import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted lift-on-hover mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="font-display text-4xl font-bold text-ink mb-6">Privacy Policy</h1>
        <p className="text-muted text-sm mb-8">Last updated: June 2025</p>
        <div className="prose prose-slate max-w-none space-y-6 text-ink/80 leading-relaxed">
          <p>Quanzhou Huafengsheng Shoe Material Co., Ltd ("HFS", "we", "us") is committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights.</p>
          <h2 className="font-display text-xl font-semibold text-ink mt-8">Information We Collect</h2>
          <p>We collect information you provide directly: name, email address, phone number, and any messages submitted through our contact form. We do not collect payment information.</p>
          <h2 className="font-display text-xl font-semibold text-ink mt-8">How We Use Your Data</h2>
          <p>Your information is used solely to respond to your inquiry and follow up on potential business opportunities. We do not sell or share your data with third parties.</p>
          <h2 className="font-display text-xl font-semibold text-ink mt-8">Contact</h2>
          <p>For privacy-related questions, contact us via WhatsApp at +63 976 630 4431.</p>
        </div>
      </div>
    </div>
  )
}
