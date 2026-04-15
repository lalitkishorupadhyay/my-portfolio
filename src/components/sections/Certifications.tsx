import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { certifications } from '../../data/portfolio'
import { fadeIn, textVariant } from '../../utils/motion'
import SectionWrapper from '../../hoc/SectionWrapper'

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.15, 0.6)}>
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} transitionSpeed={400}>
        <div
          className="relative p-[1.5px] rounded-2xl h-full"
          style={{
            background: `linear-gradient(135deg, ${cert.badgeColor}88, ${cert.badgeColor}22)`,
          }}
        >
          <div
            className="rounded-2xl p-6 flex flex-col gap-4 h-full"
            style={{ background: '#0d0d1a' }}
          >
            {/* Top row: badge image or icon + verified pill */}
            <div className="flex items-start justify-between gap-4">
              {cert.badgeImage ? (
                <img
                  src={cert.badgeImage}
                  alt={cert.name}
                  className="w-16 h-16 object-contain rounded-xl flex-shrink-0"
                  style={{
                    background: `${cert.badgeColor}12`,
                    padding: 4,
                    border: `1.5px solid ${cert.badgeColor}40`,
                    boxShadow: `0 0 16px ${cert.badgeColor}30`,
                  }}
                />
              ) : (
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${cert.badgeColor}18`,
                    border: `1.5px solid ${cert.badgeColor}50`,
                    boxShadow: `0 0 16px ${cert.badgeColor}30`,
                  }}
                >
                  {cert.icon}
                </div>
              )}

              <span
                className="text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 flex-shrink-0"
                style={{
                  background: `${cert.badgeColor}18`,
                  border: `1px solid ${cert.badgeColor}50`,
                  color: cert.badgeColor,
                }}
              >
                ✓ Verified
              </span>
            </div>

            {/* Cert name & issuer */}
            <div>
              <h3 className="text-white font-bold text-[17px] leading-snug">{cert.name}</h3>
              <p className="text-white/50 text-[13px] mt-1">{cert.issuer}</p>
            </div>

            {/* Issued / expiry dates */}
            <div className="flex flex-col gap-0.5">
              <p className="text-white/40 text-[12px]">Issued: {cert.date}</p>
              {cert.expiryDate && (
                <p className="text-white/30 text-[12px]">Expires: {cert.expiryDate}</p>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 mt-auto pt-3" style={{ borderTop: `1px solid ${cert.badgeColor}20` }}>
              {cert.credlyUrl && (
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-80 hover:scale-105"
                  style={{
                    background: `${cert.badgeColor}20`,
                    border: `1px solid ${cert.badgeColor}50`,
                    color: cert.badgeColor,
                  }}
                >
                  🏅 View on Credly
                </a>
              )}
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-80 hover:scale-105"
                  style={{
                    background: `${cert.badgeColor}20`,
                    border: `1px solid ${cert.badgeColor}50`,
                    color: cert.badgeColor,
                  }}
                >
                  ↗ Verify
                </a>
              )}
              {cert.pdfUrl && (
                <a
                  href={cert.pdfUrl}
                  download
                  className="flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-80 hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  ⬇ Download PDF
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

function Certifications() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">Credentials</p>
        <h2 className="section-head-text">Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('up', 'tween', 0.1, 1)}
        className="mt-3 text-white/50 text-[15px] max-w-2xl leading-relaxed"
      >
        Industry-recognized certifications validating cloud and AI expertise.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <CertCard key={cert.name} cert={cert} index={i} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Certifications, 'certifications')
