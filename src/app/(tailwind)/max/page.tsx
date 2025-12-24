import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  robots: { index: false },
};

const MaxPlanPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
              QC
            </div>
            <span className="text-lg font-semibold tracking-tight">
              QC Makeup Academy
            </span>
          </div>
          <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
            Enroll now
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        {/* Hero + plans */}
        <section className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          {/* Hero copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-600">
              Max plan
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Max support. Your schedule.
            </h1>
            <p className="mt-4 text-sm text-slate-600 md:text-base">
              Learn with weekly live touchpoints, a dedicated tutor, and a small
              cohort that keeps you inspired. Follow the weekly rhythm or move
              through the course at a pace that fits your life.
            </p>
            <p className="mt-3 text-xs font-medium text-emerald-700 md:text-sm">
              High support with zero pressure. Join live, watch recordings
              later, and submit work when you are ready.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#why">
                <button className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
                  Explore the Max plan
                </button>
              </a>
              <a href="#flow">
                <button className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100">
                  How Max works
                </button>
              </a>
            </div>
          </div>

          {/* Plan cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Standard plan */}
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Standard
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-xl font-semibold">$XX</span>
                <span className="text-xs text-slate-500">per course</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                A clear, self-guided online experience with full tutor feedback
                on every assignment.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                <li>• Complete coursework whenever it suits you</li>
                <li>• Tutor graded assignments</li>
                <li>• Email support when you have questions</li>
              </ul>
              <button className="mt-5 w-full rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100">
                Choose Standard
              </button>
            </article>

            {/* Max plan */}
            <article className="relative flex flex-col rounded-2xl border-2 border-indigo-500 bg-white p-5 shadow-md">
              <div className="absolute right-4 top-4 rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-700">
                Most support
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                Max plan
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-xl font-semibold">$YY</span>
                <span className="text-xs text-slate-500">per course</span>
              </div>
              <p className="mt-3 text-sm text-slate-700">
                Weekly live webinars, direct access to your tutor, and a
                like minded cohort to learn alongside, all with a pace that
                adjusts to your life.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                <li>• Weekly live webinars, recorded for anytime viewing</li>
                <li>• Direct tutor interaction and Q and A</li>
                <li>• Private cohort community space</li>
                <li>• A gentle weekly rhythm you can follow or dip into when it works</li>
              </ul>
              <p className="mt-3 text-xs text-emerald-700">
                Max is for students who want the most guidance and connection,
                while keeping full flexibility over when they study.
              </p>
              <button className="mt-5 w-full rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
                Choose the Max plan
              </button>
            </article>
          </div>
        </section>

        {/* Why Max works */}
        <section id="why" className="mt-14 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                Why the Max plan works so well
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                Max brings together live touchpoints, personal attention, and a
                small community so you never feel like you are learning alone.
              </p>
            </div>
            <p className="text-xs font-medium text-emerald-700 md:text-sm">
              Think of it as a guided path that you can join and rejoin as life
              allows.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="flex gap-3">
              <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-full bg-indigo-50 text-center text-lg">
                <span className="align-middle text-indigo-600">🎥</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Weekly live webinars
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Stay connected and inspired with regular live sessions. Join
                  in real time or watch the recordings later whenever it fits
                  your schedule.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-full bg-indigo-50 text-center text-lg">
                <span className="align-middle text-indigo-600">📝</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Personal tutor attention
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Your tutor knows your name, your goals, and your work. Feedback
                  feels like a conversation, not a checklist.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-full bg-indigo-50 text-center text-lg">
                <span className="align-middle text-indigo-600">🤝</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  A cohort that lifts you up
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Share wins, swap ideas, and see how others interpret the same
                  brief. The cohort adds motivation, not pressure.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-full bg-indigo-50 text-center text-lg">
                <span className="align-middle text-indigo-600">🧭</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  A rhythm, not a rulebook
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  We give you a simple week by week roadmap so you always know
                  what comes next. You choose how closely to follow it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Max flows */}
        <section id="flow" className="mt-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                How the Max experience flows
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                A simple rhythm that keeps you moving, with the freedom to pause
                and return whenever you need to.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Week 1
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Welcome and first steps
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Meet your tutor in an optional live welcome session and get
                clear on what to expect. Your first assignment opens and you can
                start whenever you are ready.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Week 2
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Feedback and momentum
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Join a live Q and A, see real examples from your cohort, and
                receive feedback on your work. All sessions are recorded, so you
                never miss out on the teaching.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                Ongoing
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Your pace, fully supported
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Travel, work, family. Take breaks when you need them. Your
                recordings, your cohort space, and your tutor are there when you
                come back.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ + side CTA */}
        <section className="mt-14 grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
          {/* FAQ */}
          <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Questions about the Max plan
            </h2>
            <div className="mt-5 space-y-5 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">
                  Do I have to keep up with the cohort?
                </p>
                <p className="mt-1 text-slate-600">
                  No. The cohort gives you structure and support, not strict
                  deadlines. Some students follow the suggested timeline, others
                  dip in and out as life allows. Both approaches are welcome.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  What if I miss the live sessions?
                </p>
                <p className="mt-1 text-slate-600">
                  Every webinar is recorded and uploaded to your student portal.
                  You can watch on your own time and still get feedback on your
                  assignments.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Can I switch plans later?
                </p>
                <p className="mt-1 text-slate-600">
                  Yes. You can start on the Standard plan and upgrade to Max
                  when you want more live support, or move back to Standard if
                  you prefer a quieter experience.
                </p>
              </div>
            </div>
          </div>

          {/* Side CTA */}
          <aside className="flex flex-col justify-between rounded-3xl bg-indigo-600 p-6 text-white md:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-100">
                Max plan in one line
              </p>
              <p className="mt-3 text-lg font-semibold md:text-xl">
                Maximum support and connection, with the same freedom to study
                on your own schedule.
              </p>
            </div>
            <div className="mt-6">
              <button className="w-full rounded-full bg-white px-4 py-2.5 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50">
                Choose the Max plan
              </button>
              <p className="mt-3 text-xs text-indigo-100">
                No long term lock in. Adjust your pace or change plans whenever
                you need to.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default MaxPlanPage;
