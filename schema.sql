
-- =====================================================
-- COMPLETE DASHBOARD MANAGEMENT SYSTEM
-- =====================================================

-- =====================================================
-- MEMBERS
-- =====================================================

CREATE TABLE IF NOT EXISTS members (
    id TEXT PRIMARY KEY,

    name TEXT NOT NULL,

    role TEXT NOT NULL CHECK(role IN (
        'เจ้าหน้าที่',
        'เจ้าหน้าที่อาวุโส',
        'เจ้าหน้าที่ชำนาญการ',
        'หัวหน้างาน',
        'ผู้จัดการ',
        'รองผู้อำนวยการ'
    )),

    supervisor_id TEXT,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (supervisor_id)
    REFERENCES members(id)
    ON DELETE SET NULL
);

-- =====================================================
-- TASKS
-- =====================================================

CREATE TABLE IF NOT EXISTS tasks (
    id TEXT PRIMARY KEY,

    title TEXT NOT NULL,

    description TEXT,

    deadline TEXT,

    priority TEXT NOT NULL CHECK(priority IN (
        'Low',
        'Medium',
        'High',
        'Critical'
    )),

    status TEXT NOT NULL CHECK(status IN (
        'Todo',
        'In Progress',
        'In Review',
        'Done',
        'Rejected'
    )),

    assignee_id TEXT,
    reviewer_id TEXT,
    created_by TEXT,

    progress INTEGER DEFAULT 0,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (assignee_id)
    REFERENCES members(id)
    ON DELETE SET NULL,

    FOREIGN KEY (reviewer_id)
    REFERENCES members(id)
    ON DELETE SET NULL,

    FOREIGN KEY (created_by)
    REFERENCES members(id)
    ON DELETE SET NULL
);

-- =====================================================
-- DASHBOARD PERMISSIONS
-- =====================================================

CREATE TABLE IF NOT EXISTS dashboard_permissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    role TEXT NOT NULL,

    can_view_team INTEGER DEFAULT 0,
    can_view_all INTEGER DEFAULT 0,

    can_export_pdf INTEGER DEFAULT 1,
    can_export_excel INTEGER DEFAULT 1,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- DASHBOARD EXPORT HISTORY
-- =====================================================

CREATE TABLE IF NOT EXISTS dashboard_exports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id TEXT NOT NULL,

    export_type TEXT NOT NULL CHECK(export_type IN (
        'PDF',
        'EXCEL'
    )),

    exported_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES members(id)
    ON DELETE CASCADE
);

-- =====================================================
-- DASHBOARD METRICS
-- =====================================================

CREATE TABLE IF NOT EXISTS dashboard_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    member_id TEXT,

    total_tasks INTEGER DEFAULT 0,
    completed_tasks INTEGER DEFAULT 0,
    delayed_tasks INTEGER DEFAULT 0,
    reviewing_tasks INTEGER DEFAULT 0,

    productivity_score REAL DEFAULT 0,

    calculated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (member_id)
    REFERENCES members(id)
    ON DELETE CASCADE
);

-- =====================================================
-- ROLE PERMISSIONS
-- =====================================================

INSERT OR IGNORE INTO dashboard_permissions (
    role,
    can_view_team,
    can_view_all,
    can_export_pdf,
    can_export_excel
)
VALUES

('เจ้าหน้าที่', 0, 0, 1, 1),
('เจ้าหน้าที่อาวุโส', 0, 0, 1, 1),
('เจ้าหน้าที่ชำนาญการ', 0, 0, 1, 1),

('หัวหน้างาน', 1, 0, 1, 1),

('ผู้จัดการ', 1, 1, 1, 1),

('รองผู้อำนวยการ', 1, 1, 1, 1);

-- =====================================================
-- MEMBERS DATA
-- =====================================================

INSERT OR IGNORE INTO members (
    id,
    name,
    role,
    supervisor_id
)
VALUES

('dep-1', 'รอง.ตั๋น', 'รองผู้อำนวยการ', NULL),

('mgr-1', 'คุณป๊อบ', 'ผู้จัดการ', 'dep-1'),

('head-1', 'คุณลูกหยี', 'หัวหน้างาน', 'mgr-1'),

('staff-1', 'คุณเหมียว', 'เจ้าหน้าที่ชำนาญการ', 'head-1'),

('staff-2', 'คุณวิชญ์', 'เจ้าหน้าที่', 'head-1');

-- =====================================================
-- SAMPLE TASKS
-- =====================================================

INSERT OR IGNORE INTO tasks (
    id,
    title,
    description,
    deadline,
    priority,
    status,
    assignee_id,
    reviewer_id,
    created_by,
    progress
)
VALUES

(
    'task-001',
    'จัดทำรายงาน KPI',
    'สรุป KPI รายเดือน',
    '2026-06-15',
    'High',
    'In Progress',
    'staff-1',
    'head-1',
    'mgr-1',
    60
),

(
    'task-002',
    'ตรวจสอบ Dashboard',
    'ตรวจสอบ Dashboard และรายงาน',
    '2026-06-20',
    'Medium',
    'Todo',
    'staff-2',
    'head-1',
    'mgr-1',
    0
);

-- =====================================================
-- DASHBOARD FEATURES
-- =====================================================

-- ทุก Role มีปุ่ม Dashboard ของตัวเอง
-- Dashboard เปลี่ยนตาม Role อัตโนมัติ

-- =====================================================
-- STAFF DASHBOARD
-- =====================================================

-- แสดง:
-- - งานของตนเอง
-- - Todo List
-- - งานใกล้ครบกำหนด
-- - Progress งาน
-- - Export PDF / Excel

-- Charts:
-- - Pie Chart
-- - Progress Circle
-- - Weekly Bar Chart

-- =====================================================
-- SUPERVISOR DASHBOARD
-- =====================================================

-- แสดง:
-- - งานทีม
-- - Progress ลูกทีม
-- - Approval Queue
-- - Team KPI

-- Charts:
-- - Team Productivity
-- - Workload Heatmap
-- - Delayed Tasks Graph

-- =====================================================
-- MANAGER DASHBOARD
-- =====================================================

-- แสดง:
-- - KPI รวม
-- - Analytics
-- - Productivity Trend
-- - Department Summary

-- Charts:
-- - Department KPI
-- - Monthly Trend
-- - Risk Analysis

-- =====================================================
-- EXECUTIVE DASHBOARD
-- =====================================================

-- แสดง:
-- - ภาพรวมองค์กร
-- - Strategic KPI
-- - Risk Monitoring
-- - Executive Summary

-- Charts:
-- - Organization Overview
-- - Performance Ranking
-- - Strategic Dashboard

-- =====================================================
-- FRONTEND BUTTONS
-- =====================================================

-- Dashboard Button
-- Export PDF Button
-- Export Excel Button

-- =====================================================
-- API ROUTES
-- =====================================================

-- GET /dashboard
-- GET /dashboard/export/pdf
-- GET /dashboard/export/excel

-- =====================================================
-- END OF FILE
-- =====================================================