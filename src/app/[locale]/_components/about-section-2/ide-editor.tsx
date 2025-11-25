import Image from "next/image";
import React, { Fragment } from "react";
import { X } from "lucide-react";

interface IDEEditorProps {
  className?: string;
  photoSrc?: string;
}

export function IDEEditor({ photoSrc = "/portret.png" }: IDEEditorProps) {
  const themeVars = {
    "--ide-background": "#0b0d11",
    "--ide-sidebar-bg": "rgba(255, 255, 255, 0.03)",
    "--ide-titlebar-bg": "rgba(255, 255, 255, 0.04)",
    "--ide-editor-bg": "rgba(255, 255, 255, 0.02)",
    "--ide-terminal-bg": "rgba(255, 255, 255, 0.02)",
    "--ide-chat-bg": "rgba(255, 255, 255, 0.03)",
    "--ide-text": "#e2e8f0",
    "--ide-text-muted": "rgba(226, 232, 240, 0.65)",
    "--ide-border": "rgba(255, 255, 255, 0.08)",
    "--ide-primary": "#22d3ee",
    "--ide-accent": "#a855f7",
  } as React.CSSProperties;

  const codeLines: { tokens: { text: string; color?: string }[] }[] = [
    { tokens: [{ text: "/*", color: "#6a9955" }] },
    {
      tokens: [
        { text: " * Copyright (c) Microsoft Corporation.", color: "#6a9955" },
      ],
    },
    {
      tokens: [
        { text: " * Licensed under the MIT License.", color: "#6a9955" },
      ],
    },
    { tokens: [{ text: " */", color: "#6a9955" }] },
    { tokens: [{ text: "'use strict';", color: "#ce9178" }] },
    { tokens: [] },
    {
      tokens: [
        {
          text: "// Increase max listeners for event emitters",
          color: "#6a9955",
        },
      ],
    },
    {
      tokens: [
        { text: "require", color: "#569cd6" },
        { text: "(", color: "var(--ide-text)" },
        { text: "'events'", color: "#ce9178" },
        { text: ")", color: "var(--ide-text)" },
        { text: ".", color: "var(--ide-text)" },
        { text: "EventEmitter", color: "#4ec9b0" },
        { text: ".", color: "var(--ide-text)" },
        { text: "defaultMaxListeners", color: "#4ec9b0" },
        { text: " = ", color: "var(--ide-text)" },
        { text: "100", color: "#b5cea8" },
        { text: ";", color: "var(--ide-text)" },
      ],
    },
    { tokens: [] },
    {
      tokens: [
        { text: "const", color: "#569cd6" },
        { text: " ", color: "var(--ide-text)" },
        { text: "gulp", color: "#9cdcfe" },
        { text: " = ", color: "var(--ide-text)" },
        { text: "require", color: "#569cd6" },
        { text: "(", color: "var(--ide-text)" },
        { text: "'gulp'", color: "#ce9178" },
        { text: ");", color: "var(--ide-text)" },
      ],
    },
    {
      tokens: [
        { text: "const", color: "#569cd6" },
        { text: " ", color: "var(--ide-text)" },
        { text: "util", color: "#9cdcfe" },
        { text: " = ", color: "var(--ide-text)" },
        { text: "require", color: "#569cd6" },
        { text: "(", color: "var(--ide-text)" },
        { text: "'util'", color: "#ce9178" },
        { text: ");", color: "var(--ide-text)" },
      ],
    },
    {
      tokens: [
        { text: "const", color: "#569cd6" },
        { text: " ", color: "var(--ide-text)" },
        { text: "path", color: "#9cdcfe" },
        { text: " = ", color: "var(--ide-text)" },
        { text: "require", color: "#569cd6" },
        { text: "(", color: "var(--ide-text)" },
        { text: "'path'", color: "#ce9178" },
        { text: ");", color: "var(--ide-text)" },
      ],
    },
    {
      tokens: [
        { text: "const", color: "#569cd6" },
        { text: " ", color: "var(--ide-text)" },
        { text: "compilation", color: "#9cdcfe" },
        { text: " = ", color: "var(--ide-text)" },
        { text: "require", color: "#569cd6" },
        { text: "(", color: "var(--ide-text)" },
        { text: "'./build/lib/compilation'", color: "#ce9178" },
        { text: ");", color: "var(--ide-text)" },
      ],
    },
    { tokens: [] },
    {
      tokens: [
        { text: "// Fast compile for development time", color: "#6a9955" },
      ],
    },
    {
      tokens: [
        { text: "gulp", color: "#569cd6" },
        { text: ".", color: "var(--ide-text)" },
        { text: "task", color: "#dcdcaa" },
        { text: "(", color: "var(--ide-text)" },
        { text: "'clean-client'", color: "#ce9178" },
        { text: ", ", color: "var(--ide-text)" },
        { text: "function", color: "#569cd6" },
        { text: " () {", color: "var(--ide-text)" },
      ],
    },
    {
      tokens: [
        { text: "  return ", color: "var(--ide-text)" },
        { text: "compilation", color: "#4ec9b0" },
        { text: ".", color: "var(--ide-text)" },
        { text: "cleanClient", color: "#dcdcaa" },
        { text: "();", color: "var(--ide-text)" },
      ],
    },
    { tokens: [{ text: "});", color: "var(--ide-text)" }] },
    {
      tokens: [
        { text: "gulp", color: "#569cd6" },
        { text: ".", color: "var(--ide-text)" },
        { text: "task", color: "#dcdcaa" },
        { text: "(", color: "var(--ide-text)" },
        { text: "'compile-client'", color: "#ce9178" },
        { text: ", ", color: "var(--ide-text)" },
        { text: "function", color: "#569cd6" },
        { text: " () {", color: "var(--ide-text)" },
      ],
    },
    {
      tokens: [
        { text: "  return ", color: "var(--ide-text)" },
        { text: "compilation", color: "#4ec9b0" },
        { text: ".", color: "var(--ide-text)" },
        { text: "compileClient", color: "#dcdcaa" },
        { text: "();", color: "var(--ide-text)" },
      ],
    },
    { tokens: [{ text: "});", color: "var(--ide-text)" }] },
    {
      tokens: [
        { text: "gulp", color: "#569cd6" },
        { text: ".", color: "var(--ide-text)" },
        { text: "task", color: "#dcdcaa" },
        { text: "(", color: "var(--ide-text)" },
        { text: "'watch-client'", color: "#ce9178" },
        { text: ", ", color: "var(--ide-text)" },
        { text: "function", color: "#569cd6" },
        { text: " () {", color: "var(--ide-text)" },
      ],
    },
    {
      tokens: [
        { text: "  return ", color: "var(--ide-text)" },
        { text: "compilation", color: "#4ec9b0" },
        { text: ".", color: "var(--ide-text)" },
        { text: "watchClient", color: "#dcdcaa" },
        { text: "();", color: "var(--ide-text)" },
      ],
    },
    { tokens: [{ text: "});", color: "var(--ide-text)" }] },
    {
      tokens: [
        { text: "gulp", color: "#569cd6" },
        { text: ".", color: "var(--ide-text)" },
        { text: "task", color: "#dcdcaa" },
        { text: "(", color: "var(--ide-text)" },
        { text: "'default'", color: "#ce9178" },
        { text: ", ", color: "var(--ide-text)" },
        { text: "['watch-client']", color: "#ce9178" },
        { text: ");", color: "var(--ide-text)" },
      ],
    },
  ];

  return (
    <div
      className="relative w-full h-full max-h-[700px] overflow-hidden rounded-[24px] flex flex-col"
      style={
        {
          background:
            "linear-gradient(135deg, #0b0d11 0%, #0c1016 45%, #0c111a 100%)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: "0 30px 120px rgba(0, 0, 0, 0.55)",
          isolation: "isolate",
          overflow: "hidden",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="VS Code IDE interface with code editor, terminal, and chat panel"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.6) 32%, rgba(0,0,0,0.32) 58%, rgba(0,0,0,0.12) 80%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-140px",
          top: "-80px",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle at 35% 35%, rgba(34,211,238,0.16), transparent 55%)",
          filter: "blur(35px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-160px",
          top: "18%",
          width: "380px",
          height: "380px",
          background:
            "radial-gradient(circle at 70% 40%, rgba(255,255,255,0.08), transparent 60%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Title Bar */}
        <div
          style={{
            width: "100%",
            height: "30px",
            background: "var(--ide-titlebar-bg)",
            borderBottom: "1px solid var(--ide-border)",
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
            gap: "8px",
            boxSizing: "border-box",
            flexShrink: 0,
            backdropFilter: "blur(6px)",
          }}
        >
          {/* Window Controls */}
          <div style={{ display: "flex", gap: "6px" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#ff5f56",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#ffbd2e",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#27c93f",
              }}
            />
          </div>
          {/* Title */}
          <div
            style={{
              marginLeft: "12px",
              fontSize: "11px",
              color: "var(--ide-text-muted)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            about-section.tsx - VSCODE
          </div>
        </div>

        {/* Main Content Area - 3 Column Grid Layout */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "240px 1fr 360px",
            gridTemplateRows: "30px 1fr 300px",
            overflow: "hidden",
            minHeight: 0,
          }}
        >
          {/* Left Column: Explorer Header */}
          <div
            style={{
              gridColumn: 1,
              gridRow: 1,
              background: "var(--ide-sidebar-bg)",
              borderRight: "1px solid var(--ide-border)",
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--ide-text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontFamily: "system-ui, sans-serif",
              flexShrink: 0,
            }}
          >
            EXPLORER
          </div>

          {/* Left Column: Explorer File Tree */}
          <div
            style={{
              gridColumn: 1,
              gridRow: "2 / span 2",
              background: "var(--ide-sidebar-bg)",
              borderRight: "1px solid var(--ide-border)",
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              boxShadow: "inset -24px 0 40px rgba(0,0,0,0.32)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                flex: 1,
                padding: "8px 0",
                overflowY: "auto",
                fontFamily:
                  "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                fontSize: "13px",
                color: "var(--ide-text)",
                opacity: 0.86,
              }}
            >
              <div style={{ paddingLeft: "8px" }}>
                {/* Project Name */}
                <div
                  style={{
                    padding: "2px 8px",
                    color: "var(--ide-text-muted)",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    marginTop: "8px",
                    marginBottom: "4px",
                  }}
                >
                  VSCODE
                </div>

                {/* Folders */}
                {[
                  "build",
                  "extensions",
                  "node_modules",
                  "out",
                  "remote",
                  "resources",
                  "scripts",
                  "src",
                  "test",
                ].map((folder) => (
                  <div
                    key={folder}
                    style={{
                      padding: "2px 8px 2px 20px",
                      color: "var(--ide-text-muted)",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span style={{ fontSize: "10px" }}>📁</span>
                    {folder}
                  </div>
                ))}

                {/* Active File - gulpfile.js */}
                <div
                  style={{
                    padding: "2px 8px 2px 20px",
                    background:
                      "color-mix(in oklch, var(--ide-primary) 15%, transparent)",
                    color: "var(--ide-text)",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    borderLeft: "2px solid var(--ide-primary)",
                    borderRadius: "2px",
                  }}
                >
                  <span style={{ fontSize: "10px" }}>📄</span>
                  gulpfile.js
                </div>

                {/* Files */}
                {[
                  ".editorconfig",
                  ".eslintignore",
                  ".git-blame-ignore",
                  ".gitattributes",
                  ".gitignore",
                  ".mailmap",
                  ".mention-bot",
                  ".yarnrc",
                  "yarn.lock",
                  ".eslintrc.json",
                  "cglicenses.json",
                  "cgmanifest.json",
                  "package.json",
                  "product.json",
                  "tsfmt.json",
                  "CONTRIBUTING.md",
                  "README.md",
                  "SECURITY.md",
                ].map((file) => (
                  <div
                    key={file}
                    style={{
                      padding: "2px 8px 2px 20px",
                      color: "var(--ide-text-muted)",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span style={{ fontSize: "10px" }}>📄</span>
                    {file}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column: Editor Tabs */}
          <div
            style={{
              gridColumn: 2,
              gridRow: 1,
              height: "30px",
              background: "var(--ide-titlebar-bg)",
              borderBottom: "1px solid var(--ide-border)",
              borderRight: "1px solid var(--ide-border)",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              flexWrap: "nowrap",
              whiteSpace: "nowrap",
            }}
          >
            {/* Active Tab */}
            <div
              style={{
                height: "100%",
                padding: "0 12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--ide-editor-bg)",
                border: "1px solid var(--ide-border)",
                fontSize: "12px",
                color: "var(--ide-text)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <span>gulpfile.js</span>
              <X size={16} />
            </div>

            {/* Inactive Tab */}
            <div
              style={{
                height: "100%",
                padding: "0 12px",
                display: "flex",
                alignItems: "center",
                background: "var(--ide-titlebar-bg)",
                fontSize: "12px",
                color: "var(--ide-text-muted)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              TS Untitled-2
            </div>
          </div>

          {/* Center Column: Code Editor */}
          <div
            style={{
              gridColumn: 2,
              gridRow: 2,
              display: "flex",
              flexDirection: "column",
              background: "var(--ide-editor-bg)",
              borderRight: "1px solid var(--ide-border)",
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                flex: 1,
                padding: "8px 0",
                overflow: "hidden",
                scrollbarWidth: "none",
                position: "relative",
                minHeight: 0,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  alignItems: "start",
                  rowGap: "0px",
                  fontFamily:
                    "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "var(--ide-text)",
                }}
              >
                {codeLines.map((line, idx) => (
                  <Fragment
                    key={`${idx}-${line.tokens
                      .map((token) => token.text)
                      .join("")}`}
                  >
                    <div
                      style={{
                        textAlign: "right",
                        color: "var(--ide-text-muted)",
                        userSelect: "none",
                        fontSize: "12px",
                        height: "18px",
                        lineHeight: "18px",
                        paddingRight: "8px",
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div
                      style={{
                        minHeight: "18px",
                        lineHeight: "18px",
                        paddingLeft: "10px",
                        display: "flex",
                        gap: "4px",
                        whiteSpace: "pre",
                      }}
                    >
                      {line.tokens.length === 0 ? (
                        <span> </span>
                      ) : (
                        line.tokens.map((token, tokenIdx) => (
                          <span
                            key={`${token.text}-${tokenIdx}`}
                            style={{ color: token.color ?? "var(--ide-text)" }}
                          >
                            {token.text}
                          </span>
                        ))
                      )}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column: Terminal */}
          <div
            style={{
              gridColumn: 2,
              gridRow: 3,
              display: "flex",
              flexDirection: "column",
              background: "var(--ide-terminal-bg)",
              borderTop: "1px solid var(--ide-border)",
              borderRight: "1px solid var(--ide-border)",
              flexShrink: 0,
              minHeight: 0,
            }}
          >
            {/* Terminal Header */}
            <div
              style={{
                height: "30px",
                padding: "0 10px",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid var(--ide-border)",
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--ide-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontFamily: "system-ui, sans-serif",
                flexShrink: 0,
              }}
            >
              TERMINAL
            </div>

            {/* Terminal Content */}
            <div
              style={{
                padding: "8px 12px",
                overflow: "hidden",
                fontFamily:
                  "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                fontSize: "12px",
                lineHeight: "18px",
                color: "var(--ide-text)",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                scrollbarWidth: "none",
              }}
            >
              <div style={{ flex: 1 }}>
                {[
                  "[09:43:36] Starting 'watch-extension:php-language-features'...",
                  "[09:43:40] Finished 'clean-extension:html-language-features-server' after 4.66 s",
                  "[09:43:40] Starting 'watch-extension:html-language-features-server'...",
                  "[09:43:43] Finished 'clean-client' after 7.33 s",
                  "[09:43:43] Starting 'watch-client'...",
                ].map((line, idx) => (
                  <div key={idx} style={{ marginBottom: "2px" }}>
                    {line}
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    color: "var(--ide-text-muted)",
                    marginRight: "2px",
                  }}
                >
                  $
                </span>
                <span style={{ color: "var(--ide-text)" }}>
                  zsh ~/projects/portfolio
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Chat Header */}
          <div
            style={{
              gridColumn: 3,
              gridRow: 1,
              height: "30px",
              padding: "0 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid var(--ide-border)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--ide-text-muted)",
              fontFamily: "system-ui, sans-serif",
              flexShrink: 0,
            }}
          >
            <span>Chat</span>
            <button
              aria-label="Close chat"
              style={{
                display: "grid",
                placeItems: "center",
                width: "20px",
                height: "20px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                color: "var(--ide-text-muted)",
                cursor: "pointer",
              }}
            >
              <X size={12} strokeWidth={1.6} />
            </button>
          </div>

          {/* Right Column: Chat Content Area */}
          <div
            style={{
              gridColumn: 3,
              gridRow: "2 / span 2",
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              boxShadow: "inset 1px 0 0 rgba(255,255,255,0.04)",
              backdropFilter: "blur(10px)",
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            {/* Chat Output Area (Top) - Photo Display */}
            <div
              style={{
                padding: "10px 12px 8px",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                gap: "10px",
                scrollbarWidth: "none",
                height: "62%",
              }}
            >
              {/* Photo Container */}
              <div
                style={{
                  width: "100%",
                  flex: 1,
                  minHeight: "80px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid var(--ide-border)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
                }}
              >
                <Image
                  src={photoSrc}
                  alt="Grzegorz Strzeszewski"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            {/* Chat Input Area (Bottom) */}
            <div
              style={{
                padding: "8px 12px 12px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  background: "#0f1116",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "8px 10px 10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "5px 10px",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.04)",
                      color: "var(--ide-text)",
                      fontSize: "11px",
                      fontFamily: "system-ui, sans-serif",
                      cursor: "pointer",
                      minHeight: "26px",
                    }}
                  >
                    <span style={{ opacity: 0.8 }}>@</span>
                    <span>Add context</span>
                  </button>
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    background: "#15181f",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "10px 12px",
                    color: "var(--ide-text)",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Plan, search, build anything"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      color: "var(--ide-text)",
                      fontSize: "12px",
                      fontFamily: "system-ui, sans-serif",
                      outline: "none",
                      paddingRight: "12px",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "space-between",
                    paddingTop: "2px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--ide-text-muted)",
                      fontSize: "11px",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    <button
                      style={{
                        width: "26px",
                        height: "26px",
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "7px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--ide-text-muted)",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10.5 4.5L5.5 9.5C5.22386 9.77614 5.22386 10.2239 5.5 10.5C5.77614 10.7761 6.22386 10.7761 6.5 10.5L11.5 5.5C12.3284 4.67157 12.3284 3.32843 11.5 2.5C10.6716 1.67157 9.32843 1.67157 8.5 2.5L3.5 7.5C2.11929 8.88071 2.11929 11.1193 3.5 12.5C4.88071 13.8807 7.11929 13.8807 8.5 12.5L13.5 7.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "5px 10px",
                        borderRadius: "999px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.2)",
                          border: "1px solid rgba(255,255,255,0.35)",
                        }}
                      />
                      Chat
                    </span>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "5px 10px",
                        borderRadius: "10px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      claude-4-sonnet
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3 4L6 7L9 4"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <button
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      border: "none",
                      background:
                        "linear-gradient(135deg, #1dd4e8 0%, #22d3ee 100%)",
                      display: "grid",
                      placeItems: "center",
                      color: "#0a0d12",
                      boxShadow: "0 10px 24px rgba(34,211,238,0.35)",
                      cursor: "pointer",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2 8H14M10 4L14 8L10 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
