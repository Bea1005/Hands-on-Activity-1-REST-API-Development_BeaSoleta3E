const express = require('express');
const router = express.Router();
// Import controllers here...
const { protect, authorize } = require('../middleware/authMiddleware');
const {
    getAllTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
} = require('../controllers/transactionController');

// ANYONE can get dishes
router.get('/transactions', getAllTransactions);
// ONLY Admins and Managers can create dishes
router.post('/transactions', protect, authorize('admin', 'manager'), createTransaction);

module.exports = router;
