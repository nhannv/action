exports.up = async (r) => {
    const initialTables = [r.tableCreate('Office'), r.tableCreate('Department')]
    await Promise.all(initialTables)
    const initialIndices = [
      r.table('Office').indexCreate('orgId'),
      r.table('Department').indexCreate('orgId')
    ]
    await Promise.all(initialIndices)
  }
  
  exports.down = async (r) => {
    const initialTables = [r.tableDrop('Office'), r.tableDrop('Department')]
    await Promise.all(initialTables)
  }
  