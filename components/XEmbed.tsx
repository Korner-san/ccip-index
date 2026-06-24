'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import type { SupportingXPost, XPostAccountType } from '@/lib/data';

type TwttrApi = {
  widgets: { load: (el?: Element | null) => void };
  ready: (fn: () => void) => void;
};

function getWindow() {
  return window as unknown as { twttr?: TwttrApi };
}

function accountTypeBadge(type: XPostAccountType) {
  const styles: Record<XPostAccountType, string> = {
    'Official Project':    'bg-green-50 text-green-700 border border-green-100',
    Chainlink:             'bg-[#375BD2]/10 text-[#375BD2] border border-[#375BD2]/20',
    'Community / Analyst': 'bg-amber-50 text-amber-700 border border-amber-100',
    Media:                 'bg-slate-50 text-slate-600 border border-slate-200',
  };
  return styles[type];
}

export default function XEmbed({ posts }: { posts: SupportingXPost[] }) {
  useEffect(() => {
    // If the widget script is already loaded when the drawer opens, trigger it
    const twttr = getWindow().twttr;
    if (twttr?.widgets) {
      twttr.widgets.load();
    }
  }, [posts]);

  return (
    <>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onLoad={() => {
          getWindow().twttr?.widgets?.load();
        }}
      />

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.url}>
            {/* Account type badge + label */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${accountTypeBadge(
                  post.accountType,
                )}`}
              >
                {post.accountType}
              </span>
              <span className="text-xs text-gray-500">{post.label}</span>
            </div>

            {/* Embedded tweet — widget replaces this blockquote with an iframe */}
            <div className="max-w-[550px]">
              <blockquote className="twitter-tweet" data-theme="light" data-dnt="true">
                <a href={post.url.replace('x.com', 'twitter.com')}>Loading post…</a>
              </blockquote>
            </div>

            {/* Fallback link (always visible until widget renders) */}
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 text-[11px] text-gray-400 hover:text-[#375BD2] transition-colors"
            >
              Open on 𝕏 ↗
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
