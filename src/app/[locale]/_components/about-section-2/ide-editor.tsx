import { cn } from "@/lib/utils";
import Next from "next/image";
import type React from "react";

interface IDEEditorProps {
  className?: string;
  photoSrc?: string;
}

export function IDEEditor({
  className,
  photoSrc = "/portret.png",
}: IDEEditorProps) {
  const themeVars = {
    "--ide-background": "var(--background)",
    "--ide-sidebar-bg":
      "color-mix(in oklch, var(--background) 95%, var(--muted))",
    "--ide-titlebar-bg": "color-mix(in oklch, var(--muted) 90%, transparent)",
    "--ide-editor-bg": "var(--background)",
    "--ide-terminal-bg":
      "color-mix(in oklch, var(--background) 98%, var(--muted))",
    "--ide-chat-bg": "var(--background)",
    "--ide-text": "var(--foreground)",
    "--ide-text-muted": "var(--muted-foreground)",
    "--ide-border": "color-mix(in oklch, var(--border) 50%, transparent)",
    "--ide-primary": "var(--primary)",
    "--ide-accent": "var(--accent)",
  } as React.CSSProperties;

  return (
    <div
      className={cn("relative w-full h-full", className)}
      style={
        {
          width: "100%",
          height: "100%",
          position: "relative",
          background: "var(--ide-background)",
          display: "flex",
          flexDirection: "column",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="VS Code IDE interface with code editor, terminal, and chat panel"
    >
      {/* Title Bar */}
      <div
        style={{
          width: "100%",
          height: "32px",
          background: "var(--ide-titlebar-bg)",
          borderBottom: "1px solid var(--ide-border)",
          display: "flex",
          alignItems: "center",
          paddingLeft: "12px",
          gap: "8px",
          boxSizing: "border-box",
          flexShrink: 0,
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

      {/* Main Content Area - 3 Column Layout */}
      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Left: Explorer Sidebar */}
        <div
          style={{
            width: "240px",
            background: "var(--ide-sidebar-bg)",
            borderRight: "1px solid var(--ide-border)",
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
          }}
        >
          {/* Explorer Header */}
          <div
            style={{
              height: "35px",
              padding: "0 12px",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid var(--ide-border)",
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--ide-text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            EXPLORER
          </div>

          {/* File Tree */}
          <div
            style={{
              flex: 1,
              padding: "8px 0",
              overflowY: "auto",
              fontFamily:
                "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
              fontSize: "13px",
              color: "var(--ide-text)",
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
                "LICENSE.txt",
                "ThirdPartyNotices.txt",
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
                }}
              >
                <span style={{ fontSize: "10px" }}>📄</span>
                gulpfile.js
              </div>
            </div>
          </div>
        </div>

        {/* Center: Editor and Terminal */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid var(--ide-border)",
          }}
        >
          {/* Editor Area */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              background: "var(--ide-editor-bg)",
              minHeight: 0,
            }}
          >
            {/* Editor Tabs */}
            <div
              style={{
                height: "35px",
                background: "var(--ide-titlebar-bg)",
                borderBottom: "1px solid var(--ide-border)",
                display: "flex",
                alignItems: "center",
                paddingLeft: "8px",
                gap: "2px",
                flexShrink: 0,
              }}
            >
              {/* Active Tab */}
              <div
                style={{
                  height: "100%",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                  background: "var(--ide-editor-bg)",
                  borderTop: "1px solid var(--ide-border)",
                  borderRight: "1px solid var(--ide-border)",
                  fontSize: "12px",
                  color: "var(--ide-text)",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                gulpfile.js
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

            {/* Code Editor */}
            <div
              style={{
                flex: 1,
                padding: "12px 0",
                overflow: "auto",
                position: "relative",
                minHeight: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily:
                    "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "var(--ide-text)",
                }}
              >
                {/* Line Numbers */}
                <div
                  style={{
                    width: "50px",
                    paddingRight: "16px",
                    textAlign: "right",
                    color: "var(--ide-text-muted)",
                    userSelect: "none",
                    fontSize: "12px",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  {Array.from({ length: 28 }, (_, i) => (
                    <div
                      key={i}
                      style={{
                        height: "20px",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      {i + 1}
                      {/* Red dot indicator on line 11 */}
                      {i === 10 && (
                        <div
                          style={{
                            position: "absolute",
                            left: "-8px",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#f48771",
                            border: "1px solid #be5046",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Code Content */}
                <div
                  style={{
                    flex: 1,
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    minWidth: 0,
                  }}
                >
                  <div style={{ whiteSpace: "pre", fontFamily: "inherit" }}>
                    {/* Line 1-4: Copyright comment */}
                    <div>
                      <span style={{ color: "#6a9955" }}>{`/*`}</span>
                      <br />
                      <span style={{ color: "#6a9955" }}>
                        {` * Copyright (c) Microsoft Corporation. All rights reserved.`}
                      </span>
                      <br />
                      <span style={{ color: "#6a9955" }}>
                        {` * Licensed under the MIT License.`}
                      </span>
                      <br />
                      <span style={{ color: "#6a9955" }}>{` */`}</span>
                    </div>
                    {/* Line 6 */}
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "#ce9178" }}>
                        {"'use strict';"}
                      </span>
                    </div>
                    {/* Line 8-9 */}
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "#6a9955" }}>
                        {`// Increase max listeners for event emitters`}
                      </span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "#569cd6" }}>require</span>
                      <span style={{ color: "var(--ide-text)" }}>(</span>
                      <span style={{ color: "#ce9178" }}>{"'events'"}</span>
                      <span style={{ color: "var(--ide-text)" }}>)</span>
                      <span style={{ color: "var(--ide-text)" }}>.</span>
                      <span style={{ color: "#4ec9b0" }}>EventEmitter</span>
                      <span style={{ color: "var(--ide-text)" }}>.</span>
                      <span style={{ color: "#4ec9b0" }}>
                        defaultMaxListeners
                      </span>
                      <span style={{ color: "var(--ide-text)" }}> = </span>
                      <span style={{ color: "#b5cea8" }}>100</span>
                      <span style={{ color: "var(--ide-text)" }}>;</span>
                    </div>
                    {/* Line 11-14: const declarations */}
                    <div style={{ marginTop: "8px" }}>
                      <span style={{ color: "#569cd6" }}>const</span>
                      <span style={{ color: "var(--ide-text)" }}> </span>
                      <span style={{ color: "#9cdcfe" }}>gulp</span>
                      <span style={{ color: "var(--ide-text)" }}> = </span>
                      <span style={{ color: "#569cd6" }}>require</span>
                      <span style={{ color: "var(--ide-text)" }}>(</span>
                      <span style={{ color: "#ce9178" }}>{"'gulp'"}</span>
                      <span style={{ color: "var(--ide-text)" }}>);</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "#569cd6" }}>const</span>
                      <span style={{ color: "var(--ide-text)" }}> </span>
                      <span style={{ color: "#9cdcfe" }}>util</span>
                      <span style={{ color: "var(--ide-text)" }}> = </span>
                      <span style={{ color: "#569cd6" }}>require</span>
                      <span style={{ color: "var(--ide-text)" }}>(</span>
                      <span style={{ color: "#ce9178" }}>{"'util'"}</span>
                      <span style={{ color: "var(--ide-text)" }}>);</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "#569cd6" }}>const</span>
                      <span style={{ color: "var(--ide-text)" }}> </span>
                      <span style={{ color: "#9cdcfe" }}>path</span>
                      <span style={{ color: "var(--ide-text)" }}> = </span>
                      <span style={{ color: "#569cd6" }}>require</span>
                      <span style={{ color: "var(--ide-text)" }}>(</span>
                      <span style={{ color: "#ce9178" }}>{"'path'"}</span>
                      <span style={{ color: "var(--ide-text)" }}>);</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "#569cd6" }}>const</span>
                      <span style={{ color: "var(--ide-text)" }}> </span>
                      <span style={{ color: "#9cdcfe" }}>compilation</span>
                      <span style={{ color: "var(--ide-text)" }}> = </span>
                      <span style={{ color: "#569cd6" }}>require</span>
                      <span style={{ color: "var(--ide-text)" }}>(</span>
                      <span style={{ color: "#ce9178" }}>
                        {"'./build/lib/compilation'"}
                      </span>
                      <span style={{ color: "var(--ide-text)" }}>);</span>
                    </div>
                    {/* Line 16-19: Comments and tasks */}
                    <div style={{ marginTop: "8px" }}>
                      <span style={{ color: "#6a9955" }}>
                        {`// Fast compile for development time`}
                      </span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "#6a9955" }}>
                        {`// Full compile, including nls and inline sources in sourcemaps, for build`}
                      </span>
                    </div>
                    {/* Gulp tasks */}
                    <div style={{ marginTop: "8px" }}>
                      <span style={{ color: "#569cd6" }}>gulp</span>
                      <span style={{ color: "var(--ide-text)" }}>.</span>
                      <span style={{ color: "#dcdcaa" }}>task</span>
                      <span style={{ color: "var(--ide-text)" }}>(</span>
                      <span style={{ color: "#ce9178" }}>
                        {"'clean-client'"}
                      </span>
                      <span style={{ color: "var(--ide-text)" }}>, </span>
                      <span style={{ color: "#569cd6" }}>function</span>
                      <span style={{ color: "var(--ide-text)" }}> () </span>
                      <span style={{ color: "var(--ide-text)" }}>{`{`}</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "var(--ide-text)" }}>{"  "}</span>
                      <span style={{ color: "#569cd6" }}>return</span>
                      <span style={{ color: "var(--ide-text)" }}> </span>
                      <span style={{ color: "#4ec9b0" }}>compilation</span>
                      <span style={{ color: "var(--ide-text)" }}>.</span>
                      <span style={{ color: "#dcdcaa" }}>cleanClient</span>
                      <span style={{ color: "var(--ide-text)" }}>();</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "var(--ide-text)" }}>{`}`}</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "#569cd6" }}>gulp</span>
                      <span style={{ color: "var(--ide-text)" }}>.</span>
                      <span style={{ color: "#dcdcaa" }}>task</span>
                      <span style={{ color: "var(--ide-text)" }}>(</span>
                      <span style={{ color: "#ce9178" }}>
                        {"'compile-client'"}
                      </span>
                      <span style={{ color: "var(--ide-text)" }}>, </span>
                      <span style={{ color: "#569cd6" }}>function</span>
                      <span style={{ color: "var(--ide-text)" }}> () </span>
                      <span style={{ color: "var(--ide-text)" }}>{`{`}</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "var(--ide-text)" }}>{"  "}</span>
                      <span style={{ color: "#569cd6" }}>return</span>
                      <span style={{ color: "var(--ide-text)" }}> </span>
                      <span style={{ color: "#4ec9b0" }}>compilation</span>
                      <span style={{ color: "var(--ide-text)" }}>.</span>
                      <span style={{ color: "#dcdcaa" }}>compileClient</span>
                      <span style={{ color: "var(--ide-text)" }}>();</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "var(--ide-text)" }}>{`}`}</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "#569cd6" }}>gulp</span>
                      <span style={{ color: "var(--ide-text)" }}>.</span>
                      <span style={{ color: "#dcdcaa" }}>task</span>
                      <span style={{ color: "var(--ide-text)" }}>(</span>
                      <span style={{ color: "#ce9178" }}>
                        {"'watch-client'"}
                      </span>
                      <span style={{ color: "var(--ide-text)" }}>, </span>
                      <span style={{ color: "#569cd6" }}>function</span>
                      <span style={{ color: "var(--ide-text)" }}> () </span>
                      <span style={{ color: "var(--ide-text)" }}>{`{`}</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "var(--ide-text)" }}>{"  "}</span>
                      <span style={{ color: "#569cd6" }}>return</span>
                      <span style={{ color: "var(--ide-text)" }}> </span>
                      <span style={{ color: "#4ec9b0" }}>compilation</span>
                      <span style={{ color: "var(--ide-text)" }}>.</span>
                      <span style={{ color: "#dcdcaa" }}>watchClient</span>
                      <span style={{ color: "var(--ide-text)" }}>();</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "var(--ide-text)" }}>{`}`}</span>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ color: "#569cd6" }}>gulp</span>
                      <span style={{ color: "var(--ide-text)" }}>.</span>
                      <span style={{ color: "#dcdcaa" }}>task</span>
                      <span style={{ color: "var(--ide-text)" }}>(</span>
                      <span style={{ color: "#ce9178" }}>{"'default'"}</span>
                      <span style={{ color: "var(--ide-text)" }}>, </span>
                      <span style={{ color: "#ce9178" }}>
                        {"'watch-client'"}
                      </span>
                      <span style={{ color: "var(--ide-text)" }}>);</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Panel */}
          <div
            style={{
              height: "280px",
              borderTop: "1px solid var(--ide-border)",
              display: "flex",
              flexDirection: "column",
              background: "var(--ide-terminal-bg)",
              flexShrink: 0,
            }}
          >
            {/* Terminal Header */}
            <div
              style={{
                height: "35px",
                padding: "0 12px",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid var(--ide-border)",
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--ide-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              TERMINAL
            </div>

            {/* Terminal Content */}
            <div
              style={{
                flex: 1,
                padding: "8px 12px",
                overflow: "auto",
                fontFamily:
                  "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                fontSize: "12px",
                lineHeight: "18px",
                color: "var(--ide-text)",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
              }}
            >
              <div style={{ flex: 1 }}>
                {[
                  "[09:43:36] Starting 'watch-extension:vscode-api-tests'...",
                  "[09:43:36] Finished 'clean-extension:typescript-language-features' after 248 ms",
                  "[09:43:36] Starting 'watch-extension:typescript-language-features'...",
                  "[09:43:36] Finished 'clean-extension:php-language-features' after 384 ms",
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
                }}
              >
                <span
                  style={{
                    color: "var(--ide-text-muted)",
                    marginRight: "4px",
                  }}
                >
                  $
                </span>
                <span style={{ color: "var(--ide-text)" }}>zsh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Chat AI Panel */}
        <div
          style={{
            width: "min(400px, 30%)",
            minWidth: "320px",
            display: "flex",
            flexDirection: "column",
            background: "var(--ide-chat-bg)",
            flexShrink: 0,
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              height: "35px",
              padding: "0 12px",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid var(--ide-border)",
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--ide-text-muted)",
              fontFamily: "system-ui, sans-serif",
              flexShrink: 0,
            }}
          >
            Chat
          </div>

          {/* Chat Content Area */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              minHeight: 0,
            }}
          >
            {/* Chat Output Area (Top) - Photo Display */}
            <div
              style={{
                flex: 1,
                padding: "12px",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
              }}
            >
              {/* Add Context Button */}
              <button
                style={{
                  width: "100%",
                  padding: "6px 10px",
                  marginBottom: "10px",
                  background: "var(--ide-sidebar-bg)",
                  border: "1px solid var(--ide-border)",
                  borderRadius: "4px",
                  color: "var(--ide-text)",
                  fontSize: "11px",
                  fontFamily: "system-ui, sans-serif",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: 0,
                }}
              >
                <span>@</span>
                <span>Add context</span>
              </button>

              {/* Photo Container - Takes most of the space */}
              <div
                style={{
                  width: "100%",
                  flex: 1,
                  minHeight: "200px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  border: "1px solid var(--ide-border)",
                  background: "var(--ide-editor-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Next
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
                padding: "12px",
                borderTop: "1px solid var(--ide-border)",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                flexShrink: 0,
              }}
            >
              {/* Input Field with icons */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  background: "var(--ide-editor-bg)",
                  border: "1px solid var(--ide-border)",
                  borderRadius: "4px",
                  padding: "0",
                }}
              >
                <input
                  type="text"
                  placeholder="Plan, search, build anything"
                  style={{
                    flex: 1,
                    padding: "8px 10px",
                    background: "transparent",
                    border: "none",
                    borderRadius: "4px",
                    color: "var(--ide-text)",
                    fontSize: "11px",
                    fontFamily: "system-ui, sans-serif",
                    outline: "none",
                  }}
                />
                {/* Paperclip icon */}
                <button
                  style={{
                    padding: "6px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ide-text-muted)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10.5 4.5L5.5 9.5C5.22386 9.77614 5.22386 10.2239 5.5 10.5C5.77614 10.7761 6.22386 10.7761 6.5 10.5L11.5 5.5C12.3284 4.67157 12.3284 3.32843 11.5 2.5C10.6716 1.67157 9.32843 1.67157 8.5 2.5L3.5 7.5C2.11929 8.88071 2.11929 11.1193 3.5 12.5C4.88071 13.8807 7.11929 13.8807 8.5 12.5L13.5 7.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* Send/Upload icon */}
                <button
                  style={{
                    padding: "6px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ide-text-muted)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 8L14 8M10 4L14 8L10 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Bottom row with Chat button and model selector */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <button
                  style={{
                    padding: "4px 10px",
                    background: "var(--ide-primary)",
                    color: "var(--primary-foreground)",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontFamily: "system-ui, sans-serif",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  Chat
                </button>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "10px",
                    color: "var(--ide-text-muted)",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  <span>claude-4-sonnet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
