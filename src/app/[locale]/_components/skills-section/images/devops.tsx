import type React from "react";

export function DevOps() {
  /* ------------------------------------------------------------
   * Theme-based design tokens using global CSS variables
   * ---------------------------------------------------------- */
  const themeVars = {
    "--deploy-primary-color": "var(--primary)",
    "--deploy-background-color": "var(--background)",
    "--deploy-text-color": "var(--foreground)",
    "--deploy-text-secondary": "var(--primary-foreground)",
    "--deploy-border-color": "var(--border)",
  } as React.CSSProperties;

  /* ------------------------------------------------------------
   * Cloud & DevOps console log output
   * ---------------------------------------------------------- */
  const logLines = [
    "[14:23:15.123] Initializing Kubernetes cluster...",
    "[14:23:15.456] AWS EKS cluster 'prod-cluster' ready",
    "[14:23:16.789] Deploying microservices to cloud",
    "[14:23:17.012] Docker containers building...",
    "[14:23:18.345] ✓ Container registry push complete",
    "[14:23:19.678] Configuring load balancer",
    "[14:23:20.901] Setting up monitoring & logging",
    "[14:23:22.134] Prometheus metrics collection active",
    "[14:23:23.567] Grafana dashboards configured",
    "[14:23:24.890] CI/CD pipeline triggered",
    "[14:23:25.123] Running automated tests...",
    "[14:23:26.456] ✓ All tests passed (98.7% coverage)",
    "[14:23:27.789] Scaling pods to handle traffic",
    "[14:23:28.012] Health checks: 5/5 services healthy",
    "[14:23:29.345] Infrastructure as Code deployed",
    "[14:23:30.678] Cloud resources provisioned",
    "[14:23:31.901] Security scanning complete",
    "[14:23:33.134] Backup strategy implemented",
    "[14:23:34.567] 🚀 Cloud deployment successful!",
  ];

  return (
    <div
      className="w-full h-full flex items-center justify-center p-4 relative"
      style={
        {
          width: "100%",
          height: "100%",
          position: "relative",
          background: "transparent",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="Cloud & DevOps console output showing Kubernetes, Docker, monitoring, and cloud deployment processes"
    >
      {/* -------------------------------------------------------- */}
      {/* Console / Terminal panel                                */}
      {/* -------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "340px",
          height: "239px",
          background:
            "linear-gradient(180deg, var(--deploy-background-color) 0%, transparent 100%)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Inner translucent panel – replicates subtle overlay */}
        <div
          style={{
            position: "absolute",
            inset: "2px",
            borderRadius: "8px",
            background: "var(--foreground) / 0.08",
          }}
        />

        {/* Log text */}
        <div
          style={{
            position: "relative",
            padding: "8px",
            height: "100%",
            overflow: "hidden",
            fontFamily:
              "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', monospace",
            fontSize: "10px",
            lineHeight: "16px",
            color: "var(--deploy-text-color)",
            whiteSpace: "pre",
          }}
        >
          {logLines.map((line, index) => (
            <p key={index} style={{ margin: 0 }}>
              {line}
            </p>
          ))}
        </div>

        {/* Inner border overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "0.791px solid var(--deploy-border-color)",
            borderRadius: "10px",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* -------------------------------------------------------- */}
      {/* Call-to-action button                                   */}
      {/* -------------------------------------------------------- */}
      <button
        style={{
          position: "absolute",
          top: "calc(50% + 57.6px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6.375px",
          padding: "5.1px 10.2px",
          background: "var(--deploy-primary-color)",
          color: "var(--deploy-text-secondary)",
          border: "none",
          cursor: "pointer",
          borderRadius: "8.925px",
          fontFamily:
            "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: "16.575px",
          lineHeight: "25.5px",
          letterSpacing: "-0.51px",
          fontWeight: 500,
          whiteSpace: "nowrap",
          boxShadow:
            "0px 42.075px 11.475px rgba(0, 0, 0, 0), 0px 26.775px 10.2px rgba(0, 0, 0, 0.01), 0px 15.3px 8.925px rgba(0, 0, 0, 0.05), 0px 6.375px 6.375px rgba(0, 0, 0, 0.09), 0px 1.275px 3.825px rgba(0, 0, 0, 0.1)",
        }}
      >
        🚀 Deploy to Cloud
      </button>
    </div>
  );
}
