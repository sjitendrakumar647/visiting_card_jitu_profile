'use client'

import Image from 'next/image'
import { Mail, Phone, Code } from 'lucide-react'

export function StudentCard() {
  const student = {
    name: 'Alex Johnson',
    email: 'alex.johnson@student.com',
    phone: '+1 (555) 123-4567',
    role: 'Software Developer',
    profileImage: '/profile.jpg',
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform transition hover:shadow-3xl hover:scale-105">
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-700"></div>

        {/* Profile Section */}
        <div className="relative px-6 pb-6">
          {/* Profile Image */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={student.profileImage}
                alt={student.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="pt-20 text-center">
            {/* Name */}
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              {student.name}
            </h1>

            {/* Role */}
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 rounded-full mb-6">
              <Code className="w-4 h-4 text-blue-600" />
              <p className="text-sm font-semibold text-blue-600">
                {student.role}
              </p>
            </div>

            {/* Divider */}
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-6"></div>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href={`mailto:${student.email}`}
                  className="text-slate-600 hover:text-blue-600 transition break-all"
                >
                  {student.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href={`tel:${student.phone}`}
                  className="text-slate-600 hover:text-blue-600 transition"
                >
                  {student.phone}
                </a>
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">
                Connect with me
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <span className="text-lg">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <span className="text-lg">⚙</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <span className="text-lg">𝕏</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
