const db = require('../config/db');

class Lead {
  static create(leadData) {
    return db.execute(
      'INSERT INTO leads (first_name, last_name, mobile_no, company_name, salary, door_number, street, city, state, pin_code, loan_amount, bank_name, loan_type, loan_process_status, payslip_1, payslip_2, payslip_3, agentId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        leadData.firstName,
        leadData.lastName,
        leadData.mobileNo,
        leadData.companyName,
        leadData.salary,
        leadData.doorNumber,
        leadData.street,
        leadData.city,
        leadData.state,
        leadData.pinCode,
        leadData.loanAmount,
        leadData.bankName,
        leadData.loanType,
        leadData.loanProcessStatus,
        leadData.payslip1,
        leadData.payslip2,
        leadData.payslip3,
        leadData.agentId,
      ]
    );
  }

  static getAllLeadsByAgentId(agentId) {
    return db.execute('SELECT * FROM leads WHERE agentId = ?', [agentId]);
  }

  static update(leadId, agentId, leadData) {
    return db.execute(
      'UPDATE leads SET first_name = ?, last_name = ?, mobile_no = ?, company_name = ?, salary = ?, door_number = ?, street = ?, city = ?, state = ?, pin_code = ?, loan_amount = ?, bank_name = ?, loan_type = ?, loan_process_status = ?, payslip_1 = ?, payslip_2 = ?, payslip_3 = ? WHERE id = ? AND agentId = ?',
      [
        leadData.first_name,
        leadData.last_name,
        leadData.mobile_no,
        leadData.company_name,
        leadData.salary,
        leadData.door_number,
        leadData.street,
        leadData.city,
        leadData.state,
        leadData.pin_code,
        leadData.loan_amount,
        leadData.bank_name,
        leadData.loan_type,
        leadData.loan_process_status,
        leadData.payslip_1,
        leadData.payslip_2,
        leadData.payslip_3,
        leadId,
        agentId,
      ]
    );
  }
  
}

module.exports = Lead;
