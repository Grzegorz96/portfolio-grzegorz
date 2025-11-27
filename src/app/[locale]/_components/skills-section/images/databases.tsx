import { Search } from "lucide-react";

import { SiMongodb, SiRedis, SiSupabase, SiPrisma } from "react-icons/si";

import { TbBrandMysql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

export function Databases() {
  // Database technologies data
  const databases = [
    {
      name: "PostgreSQL",
      icon: BiLogoPostgresql,
      connected: true,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      connected: true,
    },
    {
      name: "Redis",
      icon: SiRedis,
      connected: true,
    },
    {
      name: "MySQL",
      icon: TbBrandMysql,
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      connected: true,
    },
    {
      name: "Prisma",
      icon: SiPrisma,
    },
  ];

  return (
    <div
      className="w-full h-full flex items-center justify-center p-4 relative"
      role="img"
      aria-label="Database management interface showing connected databases and data storage technologies"
    >
      {/* Main Message Box */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, calc(-50% + 24px))",
          width: "345px",
          height: "277px",
          background:
            "linear-gradient(180deg, var(--background) 0%, transparent 100%)",
          borderTopLeftRadius: "9.628px",
          borderTopRightRadius: "9.628px",
          border: "0.802px solid var(--border)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Search Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12.837px",
              padding: "8.826px 12.837px",
              borderBottom: "0.802px solid var(--border)",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "14.442px",
                height: "14.442px",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Search className="w-full h-full text-muted-foreground" />
            </div>
            <span
              style={{
                fontFamily:
                  "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "12.837px",
                lineHeight: "19.256px",
                color: "var(--muted-foreground)",
                fontWeight: 400,
                whiteSpace: "nowrap",
              }}
            >
              Search databases
            </span>
          </div>
          {/* Database List */}
          {databases.map((database, index) => {
            const IconComponent = database.icon;
            return (
              <div
                key={database.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8.826px 12.837px",
                  borderBottom:
                    index < databases.length - 1
                      ? "0.479px solid var(--border)"
                      : "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12.837px",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground opacity-70" />
                  </div>
                  <span
                    style={{
                      fontFamily:
                        "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      fontSize: "12.837px",
                      lineHeight: "19.256px",
                      color: "var(--muted-foreground)",
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {database.name}
                  </span>
                </div>
                {database.connected && (
                  <div
                    style={{
                      background:
                        "color-mix(in oklch, var(--secondary) 80%, transparent)",
                      padding: "1.318px 5.272px",
                      borderRadius: "3.295px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        fontSize: "9.583px",
                        lineHeight: "15.333px",
                        color: "var(--primary)",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Connected
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
