export default function AdminAuditLogsPage() {
  const auditLogs = [
    { id: "LOG-401", actor: "ZED Admin", action: "APPROVED_PAYMENT", entity: "Payment PAY-9912", date: "2026-08-27 14:15", ip: "197.200.12.44" },
    { id: "LOG-400", actor: "System", action: "MEMBERSHIP_ACTIVATED", entity: "User karim@example.com", date: "2026-08-27 14:15", ip: "Internal" },
    { id: "LOG-399", actor: "ZED Admin", action: "CREATED_PRODUCT", entity: "Product prod-100k-roadmap", date: "2026-08-27 11:30", ip: "197.200.12.44" },
    { id: "LOG-398", actor: "ZED Admin", action: "UPDATED_SETTINGS", entity: "Settings baridiMobConfig", date: "2026-08-26 16:20", ip: "197.200.12.44" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold">Security & Audit Logs</h1>
        <p className="text-sm text-muted-foreground mt-1">Immutable administrative action logs and system event audit timeline.</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/40 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                <th className="py-3">Log ID</th>
                <th className="py-3">Actor</th>
                <th className="py-3">Action</th>
                <th className="py-3">Target Entity</th>
                <th className="py-3">Timestamp</th>
                <th className="py-3 text-right">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 font-mono text-xs">
              {auditLogs.map((log) => (
                <tr key={log.id} className="text-foreground hover:bg-muted/30">
                  <td className="py-3.5 text-muted-foreground">{log.id}</td>
                  <td className="py-3.5 font-sans font-medium text-foreground">{log.actor}</td>
                  <td className="py-3.5 text-primary font-bold">{log.action}</td>
                  <td className="py-3.5 text-muted-foreground">{log.entity}</td>
                  <td className="py-3.5 text-muted-foreground font-sans">{log.date}</td>
                  <td className="py-3.5 text-right text-muted-foreground">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
