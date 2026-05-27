"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="large"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Why Choose Us",          id: "#metrics"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Get a Free Estimate",        href: "#contact"}}
      logoSrc="http://img.b2bpic.net/free-vector/hand-drawn-sun-logo-template_23-2149416630.jpg"
      logoAlt="Suncoast Plumbing Logo"
      brandName="Suncoast Plumbing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "downward-rays-static-grid"}}
      title="Suncoast Plumbing: Your Trusted Local Plumbing Experts"
      description="Offering reliable, professional, and affordable plumbing services across the entire Suncoast region. We're here for all your residential and commercial needs, 24/7."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/communication-repairing-male-executive-abstract_1134-953.jpg",          alt: "Experienced plumber"},
        {
          src: "http://img.b2bpic.net/free-photo/female-plumber-working-fix-problems-client-s-house_23-2150990733.jpg",          alt: "Professional technician"},
        {
          src: "http://img.b2bpic.net/free-photo/male-jeweler-working-shop_23-2150914243.jpg",          alt: "Certified plumber"},
        {
          src: "http://img.b2bpic.net/free-photo/young-bearded-handsome-builder-wearing-construction-uniform-cap-standing-with-arms-crossed-self-confident-smiling-isolated-orange-wall_141793-15716.jpg",          alt: "Friendly plumber"},
        {
          src: "http://img.b2bpic.net/free-photo/shirt-smiling-skill-gesture-occupation_1134-1049.jpg",          alt: "Friendly plumber with a confident smile"},
      ]}
      avatarText="Trusted by hundreds of homeowners & businesses"
      buttons={[
        {
          text: "Get a Free Estimate",          href: "#contact"},
        {
          text: "Call Us Now",          href: "tel:+1234567890"},
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",          text: "20+ Years Experience"},
        {
          type: "text",          text: "Licensed & Insured"},
        {
          type: "text",          text: "24/7 Emergency Service"},
        {
          type: "text",          text: "Upfront Pricing"},
        {
          type: "text",          text: "Customer Satisfaction Guaranteed"},
      ]}
      marqueeSpeed={30}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="About Us"
      title="Over 20 Years of Trusted Plumbing Service in the Suncoast Region"
      buttons={[
        {
          text: "Learn More About Our Story",          href: "#"},
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      features={[
        {
          title: "Leak Detection & Repair",          description: "Specialized techniques to quickly locate and repair hidden leaks, preventing further damage to your property.",          imageSrc: "http://img.b2bpic.net/free-photo/man-drying-glass-with-kitchen-towel-by-black-faucet-drying-dishes_169016-69554.jpg",          imageAlt: "Plumber detecting a leak"},
        {
          title: "Water Heater Services",          description: "Expert installation, repair, and maintenance for all types of water heaters, ensuring you always have hot water.",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-working-as-plumber_23-2150746421.jpg",          imageAlt: "Plumber working on a water heater"},
        {
          title: "Professional Drain Cleaning",          description: "Thorough cleaning services to clear stubborn clogs and restore optimal flow to your drains and sewer lines.",          imageSrc: "http://img.b2bpic.net/free-photo/ordered-composition-baking-tools_23-2150096552.jpg",          imageAlt: "Plumber cleaning a drain"},
        {
          title: "Fixture Installation & Repair",          description: "From faucets and toilets to showers and sinks, we professionally install and repair all your plumbing fixtures.",          imageSrc: "http://img.b2bpic.net/free-photo/black-faucet-with-steel-sink-stylish-modern-kitchen_169016-20011.jpg",          imageAlt: "New faucet installation"},
        {
          title: "24/7 Emergency Plumbing",          description: "Rapid response for all plumbing emergencies, minimizing disruption and protecting your home or business.",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-working-as-plumber_23-2150746299.jpg",          imageAlt: "Plumber responding to an emergency call"},
      ]}
      title="Comprehensive Plumbing Solutions for Every Need"
      description="From routine maintenance to complex emergency repairs, our certified and experienced plumbers handle it all with precision, care, and the latest tools."
      tag="Our Services"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "years",          value: "20+",          description: "Years in Service"},
        {
          id: "customers",          value: "10K+",          description: "Satisfied Customers"},
        {
          id: "emergencies",          value: "5K+",          description: "Emergency Calls Handled"},
        {
          id: "experts",          value: "15+",          description: "Expert Plumbers On Staff"},
      ]}
      title="Decades of Dedication & Excellence in Plumbing"
      description="Our unwavering commitment to quality service and customer satisfaction has built a legacy of trust in the Suncoast area."
      tag="Our Impact"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          handle: "@SarahJHomes",          testimonial: "Suncoast Plumbing was incredibly professional and fixed our burst pipe quickly and efficiently. Their emergency service saved our home!",          imageSrc: "http://img.b2bpic.net/free-photo/collage-customer-experience-concept_23-2149367125.jpg"},
        {
          id: "2",          name: "Michael Chen",          handle: "@ChenCorp",          testimonial: "We rely on Suncoast Plumbing for all our commercial property maintenance. Their team is always prompt, reliable, and does an excellent job.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg"},
        {
          id: "3",          name: "Emily Rodriguez",          handle: "@EmilyR",          testimonial: "Their drain cleaning service was fantastic! My sink is flowing perfectly again, and the plumber was very friendly and knowledgeable.",          imageSrc: "http://img.b2bpic.net/free-photo/shallow-focus-cheerful-adult-couple-laughing-dancing-house_181624-51878.jpg"},
        {
          id: "4",          name: "David Kim",          handle: "@DKimConstruction",          testimonial: "Suncoast Plumbing installed our new water heater seamlessly. Great service from start to finish and transparent pricing.",          imageSrc: "http://img.b2bpic.net/free-photo/dad-holding-kid-cooking_23-2148536391.jpg"},
        {
          id: "5",          name: "Jessica Lee",          handle: "@JessLeeDesigns",          testimonial: "Highly recommend Suncoast Plumbing! They upgraded all our bathroom fixtures, and the results are stunning. Impeccable work!",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-office-worker-black-strict-jacket-smiling-holding-white-huge-sign-pink-wall_140725-58773.jpg"},
        {
          id: "6",          name: "Robert Miller",          handle: "@RobertM",          testimonial: "Fantastic service! Our emergency leak was handled swiftly and professionally. Suncoast Plumbing truly goes above and beyond.",          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-greyhaired-woman-smiling-confident-drinking-coffee-new-home_839833-34774.jpg"},
      ]}
      title="What Our Valued Customers Are Saying"
      description="Don't just take our word for it—hear directly from homeowners and businesses who have experienced the Suncoast Plumbing difference."
      tag="Happy Clients"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Local Restaurants",        "Property Management",        "Residential Communities",        "Small Businesses",        "Retail Stores",        "Healthcare Clinics",        "Schools"]}
      title="Preferred By Local Businesses & Homeowners Alike"
      description="We're proud to be the trusted plumbing choice for countless residents and esteemed businesses throughout the Suncoast area."
      tag="Trusted By"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "What areas do you serve?",          content: "Suncoast Plumbing proudly serves the entire Suncoast region, including Sarasota, Bradenton, Venice, and surrounding communities. Contact us to confirm service availability in your specific location."},
        {
          id: "q2",          title: "Do you offer emergency services?",          content: "Yes, we provide 24/7 emergency plumbing services. For urgent issues, please call our dedicated emergency line at (941) 555-0101 for immediate assistance."},
        {
          id: "q3",          title: "How do you price your services?",          content: "We believe in transparent pricing. We offer upfront, competitive quotes after assessing the job. There are no hidden fees, and we ensure you understand the costs before any work begins."},
        {
          id: "q4",          title: "Are your plumbers licensed and insured?",          content: "Absolutely. All our plumbers are fully licensed, certified, and extensively trained professionals. We are also fully insured for your peace of mind and protection."},
      ]}
      title="Your Plumbing Questions, Answered"
      description="Find quick and clear answers to the most common inquiries about our services, scheduling, and emergency assistance."
      tag="Got Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Contact Us"
      title="Need a Plumber? We're Ready to Help!"
      description="Get in touch with Suncoast Plumbing today for reliable services, free estimates, or immediate emergency assistance. Your satisfaction is our priority."
      buttons={[
        {
          text: "Request a Quote",          href: "#"},
        {
          text: "Call Us Now",          href: "tel:+1234567890"},
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="http://img.b2bpic.net/free-vector/hand-drawn-sun-logo-template_23-2149416630.jpg"
      logoAlt="Suncoast Plumbing Logo"
      logoText="Suncoast Plumbing"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Leak Detection",              href: "#services"},
            {
              label: "Water Heater Repair",              href: "#services"},
            {
              label: "Drain Cleaning",              href: "#services"},
            {
              label: "Emergency Plumbing",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Why Choose Us",              href: "#metrics"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Facebook",              href: "#"},
            {
              label: "Instagram",              href: "#"},
            {
              label: "LinkedIn",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Suncoast Plumbing. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
