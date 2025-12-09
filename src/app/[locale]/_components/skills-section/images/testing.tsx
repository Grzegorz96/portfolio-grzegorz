import type React from "react";

export function Testing() {
  // Theme-based CSS variables using global theme
  const themeVars = {
    "--t-background-gradient-start":
      "color-mix(in oklch, var(--card) 20%, transparent)",
    "--t-background-gradient-end": "transparent",
    "--t-text-primary": "var(--foreground)",
    "--t-text-secondary": "var(--muted-foreground)",
    "--t-border-color": "var(--border)",
    "--t-shadow-color": "rgba(0, 0, 0, 0.12)",
    "--t-container-gradient-start":
      "color-mix(in oklch, var(--card) 40%, transparent)",

    "--t-container-gradient-end": "transparent",
  };

  const CheckmarkIcon = () => (
    <svg
      width="13.885"
      height="13.885"
      viewBox="0 0 14 14"
      fill="none"
      style={{ width: "13.885px", height: "13.885px" }}
    >
      <path
        d="M3.85156 7.875L6.47656 10.5L10.8516 3.5"
        stroke="var(--t-text-primary)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.8"
      />
    </svg>
  );

  const RefreshIcon = () => (
    <svg
      width="13.885"
      height="13.885"
      viewBox="0 0 14 14"
      fill="none"
      style={{ width: "13.885px", height: "13.885px" }}
    >
      <path
        d="M1.75 7C1.75 4.1005 4.1005 1.75 7 1.75C9.8995 1.75 12.25 4.1005 12.25 7C12.25 9.8995 9.8995 12.25 7 12.25"
        stroke="var(--t-text-primary)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.8"
      />
      <path
        d="M4.375 10.5L1.75 12.25L3.5 9.625"
        stroke="var(--t-text-primary)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.8"
      />
    </svg>
  );

  const SparklesIcon = () => (
    <svg
      width="13.885"
      height="13.885"
      viewBox="0 0 14 14"
      fill="none"
      style={{ width: "13.885px", height: "13.885px" }}
    >
      <path
        d="M7 1.75L8.225 5.775L12.25 7L8.225 8.225L7 12.25L5.775 8.225L1.75 7L5.775 5.775L7 1.75Z"
        stroke="var(--t-text-primary)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.8"
      />
    </svg>
  );

  const BugIcon = () => (
    <svg
      width="13.885"
      height="13.885"
      viewBox="0 0 14 14"
      fill="none"
      style={{ width: "13.885px", height: "13.885px" }}
    >
      <path
        d="M7 1.75C8.24264 1.75 9.25 2.75736 9.25 4C9.25 4.41421 8.91421 4.75 8.5 4.75C8.08579 4.75 7.75 4.41421 7.75 4C7.75 3.58579 7.41421 3.25 7 3.25C6.58579 3.25 6.25 3.58579 6.25 4C6.25 4.41421 5.91421 4.75 5.5 4.75C5.08579 4.75 4.75 4.41421 4.75 4C4.75 2.75736 5.75736 1.75 7 1.75Z"
        stroke="var(--t-text-primary)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.8"
      />
      <path
        d="M4.75 7C4.75 5.75736 5.75736 4.75 7 4.75C8.24264 4.75 9.25 5.75736 9.25 7C9.25 8.24264 8.24264 9.25 7 9.25C5.75736 9.25 4.75 8.24264 4.75 7Z"
        stroke="var(--t-text-primary)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.8"
      />
      <path
        d="M7 10.25C8.24264 10.25 9.25 11.2574 9.25 12.5C9.25 12.9142 8.91421 13.25 8.5 13.25C8.08579 13.25 7.75 12.9142 7.75 12.5C7.75 12.0858 7.41421 11.75 7 11.75C6.58579 11.75 6.25 12.0858 6.25 12.5C6.25 12.9142 5.91421 13.25 5.5 13.25C5.08579 13.25 4.75 12.9142 4.75 12.5C4.75 11.2574 5.75736 10.25 7 10.25Z"
        stroke="var(--t-text-primary)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.8"
      />
    </svg>
  );

  const items = [
    {
      icon: <CheckmarkIcon />,
      title: "Unit tests passed",
      tokens: "98.7% coverage",
      model: "Jest",
      branch: "src/components/...",
    },
    {
      icon: <RefreshIcon />,
      title: "E2E test suite",
      tokens: "45 tests",
      model: "Playwright",
      branch: "tests/e2e/...",
    },
    {
      icon: <SparklesIcon />,
      title: "Performance audit",
      tokens: "Lighthouse 95",
      model: "Core Web Vitals",
      branch: "audit/report...",
    },
    {
      icon: <BugIcon />,
      title: "Bug fixes applied",
      tokens: "12 issues",
      model: "Sentry",
      branch: "fix/critical-bugs...",
    },
  ];

  return (
    <div
      style={
        {
          position: "relative",
          background: `linear-gradient(180deg, var(--t-container-gradient-start) 0%, var(--t-container-gradient-end) 100%)`,
          borderRadius: "10.047px",
          boxSizing: "border-box",
          flexShrink: 0,
          marginTop: "14px",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="Testing & Quality assurance tasks including unit tests, E2E testing, performance audits, and bug fixes"
    >
      {/* Inner content area with gradient background */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // Changed to flex-start for top alignment
          gap: "16px",
          padding: "20px",
          height: "100%",
          width: "100%", // Adjusted width for 24px margin on both sides
          background:
            "linear-gradient(180deg, color-mix(in oklch, var(--primary) 5%, transparent) 0%, transparent 100%)",
          borderTopLeftRadius: "9.628px",
          borderTopRightRadius: "9.628px",
          border: "0.802px solid var(--border)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "8.658px",
              padding: "6.494px 8.658px",
              background: `linear-gradient(180deg, var(--t-background-gradient-start) 0%, var(--t-background-gradient-end) 100%)`,
              borderRadius: "8.658px",
              boxShadow: `0px 1.082px 2.165px 0px var(--t-shadow-color)`,
              border: "0.541px solid var(--t-border-color)",
              width: "100%",
              maxWidth: "320px",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            {/* Icon container */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8.658px",
                padding: "3.247px 0 0 0",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "17.316px",
                  height: "17.316px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
            </div>
            {/* Content container */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "2.164px",
                padding: "0",
                flexShrink: 0,
                ...(index === 1
                  ? {
                      flexBasis: 0,
                      flexGrow: 1,
                      minHeight: "1px",
                      minWidth: "1px",
                    }
                  : {}),
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "10.823px",
                  lineHeight: "17.316px",
                  color: "var(--t-text-primary)",
                  whiteSpace: "pre",
                  flexShrink: 0,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "10.823px",
                  lineHeight: "17.316px",
                  color: "var(--t-text-secondary)",
                  whiteSpace: index === 1 ? "nowrap" : "pre",
                  overflow: index === 1 ? "hidden" : "visible",
                  textOverflow: index === 1 ? "ellipsis" : "clip",
                  width: index === 1 ? "100%" : "auto",
                  minWidth: index === 1 ? "100%" : "auto",
                  flexShrink: 0,
                }}
              >
                {`${item.tokens} • ${item.model} • ${item.branch}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
