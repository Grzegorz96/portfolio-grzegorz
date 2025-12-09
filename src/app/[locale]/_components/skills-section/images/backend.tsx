export function Backend() {
  const themeVars = {
    "--b-primary-color": "var(--primary)",
    "--b-background-editor":
      "color-mix(in oklch, var(--background) 90%, transparent)",
    "--b-background-preview":
      "color-mix(in oklch, var(--background) 90%, transparent)",
    "--b-text-editor": "var(--foreground)",
    "--b-text-preview": "var(--primary-foreground)",
    "--b-border-main": "var(--border)",
  };

  return (
    <div
      style={
        {
          width: "100%", // Use 100% for responsiveness within parent
          height: "100%", // Use 100% for responsiveness within parent
          position: "relative",
          background: "transparent",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="NestJS backend development interface showing TypeScript controller code and deployment panel"
    >
      {/* Left Panel - Code Editor */}
      <div
        style={{
          position: "absolute",
          top: "46px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "350px",
          height: "221px",
          background:
            "linear-gradient(180deg, var(--b-background-editor) 0%, transparent 100%)",
          borderRadius: "9.488px",
          border: "1px solid var(--b-border-main)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
        data-name="code-editor"
      >
        <div
          style={{
            padding: "9.488px 9.492px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              fontFamily:
                "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              color: "var(--b-text-editor)",
              width: "545.453px",
              maxWidth: "100%",
              position: "relative",
              margin: 0,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"@Controller('users')"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"export class UsersController {"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"  constructor(private usersService: UsersService) {}"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"  @Get()"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"  async findAll(): Promise<User[]> {"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"    return this.usersService.findAll()"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"  }"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"  @Post()"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"  async create(@Body() createUserDto: CreateUserDto) {"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"    return this.usersService.create(createUserDto)"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"  }"}
            </p>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                display: "block",
              }}
            >
              {"}"}
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Live Preview */}
      <div
        style={{
          position: "absolute",
          top: "46px",
          left: "calc(50% + 87.499px)",
          transform: "translateX(-50%)",
          width: "175px",
          height: "221px",
          background:
            "linear-gradient(180deg, var(--b-background-preview) 0%, transparent 100%)",
          borderTopRightRadius: "9.488px",
          borderBottomRightRadius: "9.488px",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
        data-name="preview-panel"
      >
        <div
          style={{
            padding: "9.488px 9.492px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            background: "var(--b-background-preview)", // Applied solid background here
          }}
        >
          {/* Download Button - Exact positioning from Figma */}
          <div
            style={{
              position: "absolute",
              top: "calc(50% + 0.001px)",
              left: "calc(50% - 71.501px)",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7.907px",
              background: "var(--b-primary-color)",
              color: "var(--b-text-preview)",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              padding: "6.326px 12.651px",
              borderRadius: "11.07px",
              boxShadow:
                "0px 52.186px 14.233px rgba(0, 0, 0, 0), 0px 33.209px 12.651px rgba(0, 0, 0, 0.01), 0px 18.977px 11.07px rgba(0, 0, 0, 0.05), 0px 7.907px 7.907px rgba(0, 0, 0, 0.09), 0px 1.581px 4.744px rgba(0, 0, 0, 0.1)",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                fontFamily:
                  "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "20.558px",
                lineHeight: "31.628px",
                letterSpacing: "-0.6326px",
                fontWeight: 500,
                color: "var(--b-text-preview)",
                textAlign: "left",
                whiteSpace: "pre",
              }}
            >
              Backend server ready
            </div>
          </div>
        </div>
      </div>

      {/* Connection Line - Exact positioning from Figma */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* This div now directly contains the SVG for the vertical line */}
        <div
          style={{
            marginTop: "40px",
            position: "relative",
            width: "2px", // Width of the line (stroke width)
            height: "265.088px", // Length of the line
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="2"
            height="285.088"
            viewBox="0 0 2 285.088"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              inset: 0,
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
          >
            <defs>
              <linearGradient
                id="connectionGradient"
                x1="1"
                y1="0"
                x2="1"
                y2="285.088"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--b-primary-color)" stopOpacity="0" />
                <stop offset="0.5" stopColor="var(--b-primary-color)" />
                <stop
                  offset="1"
                  stopColor="var(--b-primary-color)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <path
              d="M1 0V285.088"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
