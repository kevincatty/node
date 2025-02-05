package e2etests

import (
	"math/big"

	ethcommon "github.com/ethereum/go-ethereum/common"
	"github.com/zeta-chain/zetacore/e2e/runner"
	"github.com/zeta-chain/zetacore/e2e/utils"
	"github.com/zeta-chain/zetacore/testutil/sample"
	"github.com/zeta-chain/zetacore/zetaclient/testutils"
)

func TestZetaDeposit(r *runner.E2ERunner, args []string) {
	if len(args) != 1 {
		panic("TestZetaDeposit requires exactly one argument for the amount.")
	}

	amount, ok := big.NewInt(0).SetString(args[0], 10)
	if !ok {
		panic("Invalid amount specified for TestZetaDeposit.")
	}

	hash := r.DepositZetaWithAmount(r.DeployerAddress, amount)

	// wait for the cctx to be mined
	cctx := utils.WaitCctxMinedByInTxHash(r.Ctx, hash.Hex(), r.CctxClient, r.Logger, r.CctxTimeout)
	r.Logger.CCTX(*cctx, "deposit")
}

func TestZetaDepositNewAddress(r *runner.E2ERunner, args []string) {
	if len(args) != 1 {
		panic("TestZetaDepositNewAddress requires exactly one argument for the amount.")
	}

	amount, ok := big.NewInt(0).SetString(args[0], 10)
	if !ok {
		panic("Invalid amount specified for TestZetaDepositNewAddress.")
	}

	newAddress := sample.EthAddress()
	hash := r.DepositZetaWithAmount(newAddress, amount)

	// wait for the cctx to be mined
	cctx := utils.WaitCctxMinedByInTxHash(r.Ctx, hash.Hex(), r.CctxClient, r.Logger, r.CctxTimeout)
	r.Logger.CCTX(*cctx, "deposit")
}

func TestZetaDepositRestricted(r *runner.E2ERunner, args []string) {
	if len(args) != 1 {
		panic("TestZetaDepositRestricted requires exactly one argument for the amount.")
	}

	amount, ok := big.NewInt(0).SetString(args[0], 10)
	if !ok {
		panic("Invalid amount specified for TestZetaDepositRestricted.")
	}

	// Deposit amount to restricted address
	r.DepositZetaWithAmount(ethcommon.HexToAddress(testutils.RestrictedEVMAddressTest), amount)
}
