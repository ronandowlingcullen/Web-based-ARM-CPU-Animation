"use strict"

function dlx(vplayer) {

	const ABSOLUTE = vplayer.ABSOLUTE
	const ARROW60_END = vplayer.ARROW60_END
	const BEVEL_JOIN = vplayer.BEVEL_JOIN
	const BLACK = vplayer.BLACK
	const BOLD = vplayer.BOLD
	const BUTT_END = vplayer.BUTT_END
	const DASH = vplayer.DASH
	const DOT = vplayer.DOT
	const GRAY192 = vplayer.GRAY192
	const GRAY224 = vplayer.GRAY224
	const GRAY64 = vplayer.GRAY64
	const GREEN = vplayer.GREEN
	const HLEFT = vplayer.HLEFT
	const ITALIC = vplayer.ITALIC
	const MB_LEFT = vplayer.MB_LEFT
	const MB_RIGHT = vplayer.MB_RIGHT
	const RED = vplayer.RED
	const ROUND_END = vplayer.ROUND_END
	const ROUND_JOIN = vplayer.ROUND_JOIN
	const ROUND_START = vplayer.ROUND_START
	const SMALLCAPS = vplayer.SMALLCAPS
	const SOLID = vplayer.SOLID
	const STRIKETHROUGH = vplayer.STRIKETHROUGH
	const VTOP = vplayer.VTOP
	const WHITE = vplayer.WHITE
	const YELLOW = vplayer.YELLOW

	var $g = vplayer.$g
	var addWaitToEventQ = vplayer.addWaitToEventQ
	var checkPoint = vplayer.checkPoint
	var debug = vplayer.debug
	var Font = vplayer.Font
	var fork = vplayer.fork
	var getArg = vplayer.getArg
	var getArgAsNum = vplayer.getArgAsNum
	var getURL = vplayer.getURL
	var Group = vplayer.Group
	var Image = vplayer.Image
	var Layer = vplayer.Layer
	var Line = vplayer.Line
	var Line2 = vplayer.Line2
	var newArray = vplayer.newArray
	var Polygon = vplayer.Polygon
	var R$ = vplayer.R$
	var Rectangle = vplayer.Rectangle
	var Rectangle2 = vplayer.Rectangle2
	var reset = vplayer.reset
	var rgba = vplayer.rgba
	var round = vplayer.round
	var setArg = vplayer.setArg
	var setBgBrush = vplayer.setBgBrush
	var setTPS = vplayer.setTPS
	var setViewport = vplayer.setViewport
	var SolidBrush = vplayer.SolidBrush
	var SolidPen = vplayer.SolidPen
	var sprintf = vplayer.sprintf
	var sqrt = vplayer.sqrt
	var stop = vplayer.stop
	var terminateThread = vplayer.terminateThread
	var timeMS = vplayer.timeMS
	var Txt = vplayer.Txt
	var VObj = vplayer.VObj

	const THIN = 1
	const MEDIUM = 3
	const THICK = 5
	const DARK_BLUE = rgba(0, 0, 0.625)
	const LIGHT_BLUE = rgba(0.75, 1, 1)
	const PURPLE = rgba(0.75, 0.625, 0.75)
	const BORDEAU = rgba(0.375, 0, 0)
	const MARINE = rgba(0.375, 0.625, 0.375)
	const LIGHT_YELLOW = rgba(1, 1, 0.75)
	const ORANGE = 16753920
	const testOps = 1
	const WIDTH = 2200
	const HEIGHT = 1080
	const maxexample = 5
	const NO_STALL = 0
	const DATA_STALL = 1
	const CTRL_STALL = 2
	const MUL_STALL = 3
	const PIPELINING_ENABLED = 0
	const PIPELINING_DISABLED = 1
	const BRANCH_PREDICTION = 0
	const BRANCH_INTERLOCK = 1
	const DELAYED_BRANCHES = 2
	const LOAD_INTERLOCK = 0
	const NO_LOAD_INTERLOCK = 1
	const ALU_FORWARDING = 0
	const ALU_INTERLOCK = 1
	const NO_ALU_INTERLOCK = 2
	const FORWARDING_TO_SMDR = 0
	const STORE_INTERLOCK = 1
	const NO_STORE_INTERLOCK = 2
	const ZERO_FORWARDING = 0
	const ZERO_INTERLOCK = 1
	const NO_ZERO_INTERLOCK = 2
	const MAX_COND = 18
	const def = 0
	const EQ = 1
	const NE = 2
	const HS = 3
	const CS = 4
	const LO = 5
	const CC = 6
	const MI = 7
	const PL = 8
	const VS = 9
	const VC = 10
	const HI = 11
	const LS = 12
	const GE = 13
	const LT = 14
	const GT = 15
	const LE = 16
	const AL = 17
	const NV = 18
	const MAX_INSTR = 48
	const NOP = 0
	const ADD = 1
	const ADC = 2
	const SUB = 3
	const SBC = 4
	const RSB = 5
	const RSC = 6
	const MUL = 7
	const AND = 8
	const ORR = 9
	const EOR = 10
	const BIC = 11
	const LSL = 12
	const LSR = 13
	const ASR = 14
	const ROR = 15
	const ADDi = 16
	const ADCi = 17
	const SUBi = 18
	const SBCi = 19
	const RSBi = 20
	const RSCi = 21
	const ANDi = 22
	const ORRi = 23
	const EORi = 24
	const BICi = 25
	const LSLi = 26
	const LSRi = 27
	const ASRi = 28
	const RORi = 29
	const CMN = 30
	const CMP = 31
	const TEQ = 32
	const TST = 33
	const CMNi = 34
	const CMPi = 35
	const TEQi = 36
	const TSTi = 37
	const MOV = 38
	const MVN = 39
	const LDR = 40
	const STR = 41
	const MOVi = 42
	const MVNi = 43
	const LDRi = 44
	const STRi = 45
	const B = 46
	const BL = 47
	const HALT = 48
	const STALL = 49
	const EMPTY = 50
	const OP_TYPE_UNUSED = 0
	const OP_TYPE_REG = 1
	const OP_TYPE_IMM = 2
	const HORIZONTAL = 0
	const VERTICAL = 1
	const LEFT = 0
	const RIGHT = 1
	const TOP = 2
	const BOTTOM = 3
	const BUTTON_PE = 0
	const BUTTON_BP = 1
	const BUTTON_LI = 2
	const BUTTON_AF = 3
	const BUTTON_SF = 4
	const BUTTON_ZF = 5
	const BUTTON_SP = 6
	const LOGOW = 44
	const LOGOH = 44

	var $thread = 0
	var $pc = 0
	var $fp = -1
	var $sp = -1
	var $acc = 0
	var $obj = 0
	var $stack = 0

	function callf(pc, obj) {
		if (obj === undefined)
			obj = 0
		let l = arguments.length - 1
		for (let i = l; i >= 2; i--)
			$stack[++$sp] = arguments[i]
		$acc = obj
		$stack[++$sp] = $pc + 1
		$pc = pc
		return $acc
	}

	function enterf(n) {	// n = # local variables
		$stack[++$sp] = $obj
		$stack[++$sp] = $fp
		$fp = $sp
		$obj = $acc
		$sp += n
	}

	function returnf(n) {	// n = # parameters to pop
		$sp = $fp
		$fp = $stack[$sp--]
		$obj = $stack[$sp--]
		$pc = $stack[$sp--]
		if ($pc == -1) {
			terminateThread($thread)
			$thread = 0
			return
		}
		$sp -= n
	}

	function suspendThread() {
		if ($thread == 0)
			return 0;
		$thread.pc = $pc
		$thread.fp = $fp
		$thread.sp = $sp
		$thread.acc = $acc
		$thread.obj = $obj
		return $thread
	}

	function waitTracker() {
		$pc++
		return $thread
	}

	function resumeThread(toThread) {
		$pc = toThread.pc
		$fp = toThread.fp
		$sp = toThread.sp
		$acc = toThread.acc
		$obj = toThread.obj
		$stack = toThread.stack
		$thread = toThread
	}

	function switchToThread(toThread) {
		if ($thread == toThread)
			return
		suspendThread()
		resumeThread(toThread)
	}

	function wait(ticks, pc) {
		$pc = (pc === undefined) ? $pc + 1 : pc
		suspendThread()
		addWaitToEventQ(ticks, $thread)
		return 1
	}

	function instrIsNop(instr) {
		return (instr==NOP || instr==STALL || instr==EMPTY || instr==HALT) ? 1 : 0
	}

	function instrIsArRR(instr) {
		return (instr>=ADD && instr<=ROR) ? 1 : 0
	}

	function instrIsArRI(instr) {
		return ((instr>=ADDi) && (instr<=RORi)) ? 1 : 0
		return 0
	}

	function instrIsBranch(instr) {
		return (instr==B || instr==BL) ? 1 : 0
	}

	function instrIsLoadOrStore(instr) {
		return ((instr==LDR) || (instr==STR) || (instr==LDRi) || (instr==STRi)) ? 1 : 0
	}

	function instrIsShI(instr) {
		return (instr>=LSLi && instr<=RORi) ? 1 : 0
	}

	function instrHasNoDstRR(instr) {
		return ((instr>=CMN && instr<=TST) || instrIsBranch(instr)) ? 1 : 0
	}

	function instrHasNoDstRI(instr) {
		return ((instr>=CMNi && instr<=TSTi) || instrIsBranch(instr)) ? 1 : 0
	}

	function instrHasNoOp1RR(instr) {
		return (instr>=MOV && instr<=MVN) ? 1 : 0
	}

	function instrHasNoOp1RI(instr) {
		return (instr>=MOVi && instr<=MVNi) ? 1 : 0
	}

	function instrOpTypeRdt(instr) {
		if (instrIsNop(instr) || instrHasNoDstRR(instr) || instrHasNoDstRI(instr))
		return OP_TYPE_UNUSED
		else 
		return OP_TYPE_REG
	}

	function instrOpTypeRs1(instr) {
		if (instrIsNop(instr) || instrHasNoOp1RR(instr) || instrHasNoOp1RI(instr) || instrIsBranch(instr))
		return OP_TYPE_UNUSED
		else 
		return OP_TYPE_REG
	}

	function instrOpTypeRs2(instr) {
		if (instrIsNop(instr))
		return OP_TYPE_UNUSED
		else 
		if ((instrIsArRR(instr) || instrHasNoDstRR(instr) || (instr==LDR) || (instr==STR) || instrHasNoOp1RR(instr)) && !instrIsBranch(instr))
		return OP_TYPE_REG
		else 
		return OP_TYPE_IMM
	}

	function instrOpTypeRs3(instr, instr2) {
		if (instrIsNop(instr2) || instrIsNop(instr) || instrIsArRI(instr) || (instr>=LSL && instr<=ROR) || (instr>=CMNi && instr<=TSTi) || (instr>=MOVi))
		return OP_TYPE_UNUSED
		else 
		if (instrIsShI(instr2))
		return OP_TYPE_IMM
		else 
		return OP_TYPE_REG
	}

	function shiftAllowed(instr) {
		if (instrIsNop(instr) || instrIsArRI(instr) || (instr>=LSL && instr<=ROR) || (instr>=CMNi && instr<=TSTi) || (instr>=MOVi))
		return 0
		return 1
	}

	function sAllowed(instr) {
		if (instrIsNop(instr) || instrIsLoadOrStore(instr) || instrIsBranch(instr))
		return 0
		return 1
	}

	function instrText(instr, s, cond, rdt, rs1, rs2, instr2, rs3) {
		if (instrIsNop(instr))
		return sprintf("%s", $g[37][instr])
		else 
		if (instr>=ADD && instr<=BIC)
		return sprintf("%s%s%s R%d,R%d,R%d,%s R%d", $g[37][instr], s, $g[36][cond], rdt, rs1, rs2, ((instr2!=NOP) ? $g[37][instr2] : ""), rs3)
		else 
		if (instr>=LSL && instr<=ROR)
		return sprintf("MOV%s%s R%d,R%d,%s R%d", s, $g[36][cond], rdt, rs1, $g[37][instr], rs2)
		else 
		if (instr>=ADDi && instr<=BICi)
		return sprintf("%s%s%s R%d,R%d,%02X", $g[37][instr], s, $g[36][cond], rdt, rs1, rs2)
		else 
		if (instr>=LSLi && instr<=RORi)
		return sprintf("MOV%s%s R%d,R%d,%s %02X", s, $g[36][cond], rdt, rs1, $g[37][instr], rs2)
		else 
		if (instr>=CMN && instr<=TST)
		return sprintf("%s%s%s R%d,R%d,R%d,%s R%d", $g[37][instr], s, $g[36][cond], rdt, rs1, rs2, ((instr2!=NOP) ? $g[37][instr2] : ""), rs3)
		else 
		if (instr>=CMNi && instr<=TSTi)
		return sprintf("%s%s%s R%d,R%d,%02X", $g[37][instr], s, $g[36][cond], rdt, rs1, rs2)
		else 
		if (instr==LDR || instr==STR)
		return sprintf("%s%s R%d,[R%d,R%d,%s R%d]", $g[37][instr], $g[36][cond], rdt, rs1, rs2, ((instr2!=NOP) ? $g[37][instr2] : ""), rs3)
		else 
		if (instr==LDRi || instr==STRi)
		return sprintf("%s%s R%d,[R%d,%02X]", $g[37][instr], $g[36][cond], rdt, rs1, rs2)
		else 
		if (instr==MOV || instr==MVN)
		return sprintf("%s%s%s R%d,R%d,%s R%d", $g[37][instr], s, $g[36][cond], rdt, rs1, ((instr2!=NOP) ? $g[37][instr2] : ""), rs3)
		else 
		if (instr==MOVi || instr==MVNi)
		return sprintf("%s%s%s R%d,%02X", $g[37][instr], s, $g[36][cond], rdt, rs1)
		else 
		if (instrIsBranch(instr))
		return sprintf("%s%s %02X", $g[37][instr], $g[36][cond], rs2)
		return "EMPTY"
	}

	function se8(t) {
		if (t&128)
		return (-1^255|t)
		else 
		return t
	}

	function isN(val) {
		if (val&128)
		return 1
		else 
		return 0
	}

	function isZ(val) {
		if (val==0)
		return 1
		else 
		return 0
	}

	function isAddC(op1, op2) {
		if ((op1+op2)&256)
		return 1
		else 
		return 0
	}

	function isSubC(op1, op2) {
		if ((op1+op2)&256)
		return 0
		else 
		return 1
	}

	function isAddV(op1, op2, res) {
		if (((op1&128)==(op2&128)) && ((res&128)!=(op1&128))) {
			return 1
		} else {
			return 0
		}
	}

	function isSubV(op1, op2, res) {
		if (((op1&128)!=(op2&128)) && ((res&128)!=(op1&128)))
		return 1
		else 
		return 0
	}

	function setFlags(res, op1, op2, add, mul) {
		$g[152].setNNValue(isN(res&255))
		$g[152].setNZValue(isZ(res&255))
		if (add) {
			$g[152].setNCValue(isAddC(se8(op1), se8(op2)))
			if (!mul)
			$g[152].setNVValue(isAddV(se8(op1), se8(op2), (res&255)))
		} else {
			$g[152].setNCValue(isSubC(se8(op1), se8(op2)))
			if (!mul)
			$g[152].setNVValue(isSubV(se8(op1), se8(op2), (res&255)))
		}
	}

	function testCondition(cond) {
		let tempCPSR
		if (!$g[152].invalid) {
			tempCPSR=$g[152]
		} else
		if (!$g[153].invalid) {
			tempCPSR=$g[153]
		} else {
			tempCPSR=$g[103]
		}
		if (cond==def || cond==AL) {
			return 1
		} else
		if (cond==EQ) {
			return (tempCPSR.z)
		} else
		if (cond==NE) {
			return (!tempCPSR.z)
		} else
		if (cond==HS) {
			return (tempCPSR.c)
		} else
		if (cond==CS) {
			return (tempCPSR.c)
		} else
		if (cond==LO) {
			return (!tempCPSR.c)
		} else
		if (cond==CC) {
			return (!tempCPSR.c)
		} else
		if (cond==MI) {
			return (tempCPSR.n)
		} else
		if (cond==PL) {
			return (!tempCPSR.n)
		} else
		if (cond==VS) {
			return (tempCPSR.v)
		} else
		if (cond==VC) {
			return (!tempCPSR.v)
		} else
		if (cond==HI) {
			return (tempCPSR.c && !tempCPSR.z)
		} else
		if (cond==LS) {
			return (!tempCPSR.c || tempCPSR.z)
		} else
		if (cond==GE) {
			return ((tempCPSR.n && tempCPSR.v) || (!tempCPSR.n && !tempCPSR.v))
		} else
		if (cond==LT) {
			return ((tempCPSR.n && !tempCPSR.v) || (!tempCPSR.n && tempCPSR.v))
		} else
		if (cond==GT) {
			return (!tempCPSR.z && ((tempCPSR.n && tempCPSR.v) || (!tempCPSR.n && !tempCPSR.v)))
		} else
		if (cond==LE) {
			return (tempCPSR.z || (tempCPSR.n && !tempCPSR.v) || (!tempCPSR.n && tempCPSR.v))
		} else
		if (cond==NV) {
			return 0
		}
	}

	function instrExecute(instr, s, cond, op1, op2, shiftIns, op3, n, z, c, v) {
		if (shiftIns==LSL || shiftIns==LSLi) {
			op2=(op2<<op3)&255
		} else
		if (shiftIns==LSR || shiftIns==LSRi) {
			op2=(op2>>op3)&255
		} else
		if (shiftIns==ASR || shiftIns==ASRi) {
			let sign = op2&128
			op2=(op2>>op3)&255
			if (sign) {
				op2=(op2|(255<<(8-op3)))&255
			}
		} else
		if (shiftIns==ROR || shiftIns==RORi) {
			op3=op3%8
			op2=((op2>>op3)|(op2<<(8-op3)))&255
		}
		let res = 0
		let add = 0
		let mul = 0
		let sOK = 1
		if (instr==ADD || instr==ADDi) {
			res=(se8(op1)+se8(op2))&255
			add=1
		} else
		if (instr==SUB || instr==SUBi) {
			res=(se8(op1)-se8(op2))&255
		} else
		if (instr==AND || instr==ANDi) {
			res=op1&op2
		} else
		if (instr==ORR || instr==ORRi) {
			res=op1|op2
		} else
		if (instr==EOR || instr==EORi) {
			res=op1^op2
		} else
		if (instr==LSL || instr==LSLi) {
			res=(op1<<op2)&255
		} else
		if (instr==LSR || instr==LSRi) {
			res=(op1>>op2)&255
		} else
		if (instr==ROR || instr==RORi) {
			op2=op2%8
			let newLeftPart = (op1<<(8-op2))&255
			let newRightPart = (op1>>op2)&255
			res=newLeftPart+newRightPart
		} else
		if (instr==ASR || instr==ASRi) {
			let neg = op1>>7
			if (op2>8)
			op2=8
			if (neg) {
				op1=op1^65280
			}
			res=(op1>>op2)&255
		} else
		if (instr==LDR || instr==STR || instr==LDRi || instr==STRi) {
			res=(se8(op1)+se8(op2))&255
			add=1
			sOK=0
		} else
		if (instr==ADC || instr==ADCi) {
			res=(se8(op1)+se8(op2)+c)&255
			add=1
		} else
		if (instr==BIC || instr==BICi) {
			res=(op1&(~op2))
		} else
		if (instr==CMN || instr==CMNi) {
			res=se8(op1)+se8(op2)
			add=1
			setFlags(res, op1, op2, add, 0)
			res=res&255
		} else
		if (instr==CMP || instr==CMPi) {
			res=se8(op1)-se8(op2)
			setFlags(res, op1, op2, add, 0)
			res=res&255
		} else
		if (instr==MOV || instr==MOVi) {
			res=((op2)&255)
		} else
		if (instr==MUL) {
			res=((op1*op2)&255)
			mul=1
		} else
		if (instr==MVN || instr==MVNi) {
			res=((~op1)&255)
		} else
		if (instr==RSB || instr==RSBi) {
			res=(se8(op2)-se8(op1))&255
		} else
		if (instr==RSC || instr==RSCi) {
			res=(se8(op2)-se8(op1)-1+c)&255
		} else
		if (instr==SBC || instr==SBCi) {
			res=(se8(op1)-se8(op2)-1+c)&255
		} else
		if (instr==TEQ || instr==TEQi) {
			res=se8(op1)^se8(op2)
			setFlags(res, op1, op2, add, 0)
			res=res&255
		} else
		if (instr==TST || instr==TSTi) {
			res=se8(op1)&se8(op2)
			setFlags(res, op1, op2, add, 0)
			res=res&255
		} else
		if (instr==BL) {
			res=op2&255
			sOK=0
		} else {
			res=238
		}
		if (s=="S" && sOK) {
			setFlags(res, op1, op2, add, mul)
		}
		return res
	}

	function Instruction(_x, _y, _w, _h, _addr) {
		VObj.call(this)
		this.x = _x
		this.y = _y
		this.w = _w
		this.h = _h
		this.addr = _addr
		this.vSBit = " "
		this.vIns = 0, this.vIns2 = 0, this.vCond = 0, this.vRdt = 0, this.vRs1 = 0, this.vRs2 = 0, this.vRs3 = 0
		this.opTypeRdt = 0, this.opTypeRs1 = 0, this.opTypeRs2 = 0, this.opTypeRs3 = 0
		this.shiftOk = 0
		this.sOk = 0
		this.clk
		this.fw = this.w/11
		this.insPen = new SolidPen(0, 0, BLACK)
		this.sBitPen = new SolidPen(0, 0, BLACK)
		this.condPen = new SolidPen(0, 0, BLACK)
		this.rdtPen = new SolidPen(0, 0, BLACK)
		this.rs1Pen = new SolidPen(0, 0, BLACK)
		this.rs2Pen = new SolidPen(0, 0, BLACK)
		this.ins2Pen = new SolidPen(0, 0, BLACK)
		this.rs3Pen = new SolidPen(0, 0, BLACK)
		this.brush = new SolidBrush(WHITE)
		this.adr = new Rectangle2($g[0], $g[18], 0, 0, this.brush, this.x, this.y, this.fw, this.h, 0, $g[16], "%02X", this.addr)
		this.ins = new Rectangle2($g[0], $g[18], HLEFT, 0, this.brush, this.x+this.fw, this.y, 2*this.fw, this.h, this.insPen, $g[16], " NOP")
		this.sBit = new Rectangle2($g[0], $g[18], HLEFT, 0, this.brush, this.x+3*this.fw, this.y, 0.5*this.fw, this.h, this.sBitPen, $g[16], "S")
		this.cond = new Rectangle2($g[0], $g[18], HLEFT, 0, this.brush, this.x+3.5*this.fw, this.y, this.fw, this.h, this.condPen, $g[16], "AL")
		this.rdt = new Rectangle2($g[0], $g[18], 0, 0, this.brush, this.x+5*this.fw, this.y, this.fw, this.h, this.rdtPen, $g[16], "-")
		this.rs1 = new Rectangle2($g[0], $g[18], 0, 0, this.brush, this.x+6*this.fw, this.y, this.fw, this.h, this.rs1Pen, $g[16], "-")
		this.rs2 = new Rectangle2($g[0], $g[18], 0, 0, this.brush, this.x+7.2000000000000002*this.fw, this.y, this.fw, this.h, this.rs2Pen, $g[16], "-")
		this.ins2 = new Rectangle2($g[0], $g[18], HLEFT, 0, this.brush, this.x+8.1999999999999993*this.fw, this.y, 2*this.fw, this.h, this.ins2Pen, $g[16], " NOP")
		this.rs3 = new Rectangle2($g[0], $g[18], 0, 0, this.brush, this.x+10*this.fw, this.y, this.fw, this.h, this.rs2Pen, $g[16], "-")
		this.dot = new Rectangle2($g[0], $g[18], 0, 0, $g[11], this.x+this.fw*0.80000000000000004, this.y+2, this.h/2, this.h/2)
		this.dot.setOpacity(0)
		this.arrowDown = new Line($g[0], $g[18], 0, $g[41], 0, 0, this.x+this.w+2, this.y+this.h*0.5, 5, 0, 0, 0, 0, 0)
		this.arrowUp = new Line($g[0], $g[18], 0, $g[41], 0, 0, this.x-2, this.y+this.h*0.5, -5, 0, 0, 0, 0, 0)
		this.arrowDown.setOpacity(0)
		this.arrowUp.setOpacity(0)
		this.adr.addEventHandler("eventEE", this, this.$eh0)
		this.ins.addEventHandler("eventEE", this, this.$eh1)
		this.sBit.addEventHandler("eventEE", this, this.$eh2)
		this.cond.addEventHandler("eventEE", this, this.$eh3)
		this.ins2.addEventHandler("eventEE", this, this.$eh4)
		this.rdt.addEventHandler("eventEE", this, this.$eh5)
		this.rs1.addEventHandler("eventEE", this, this.$eh6)
		this.rs2.addEventHandler("eventEE", this, this.$eh7)
		this.rs3.addEventHandler("eventEE", this, this.$eh8)
		this.ins.addEventHandler("eventMB", this, this.$eh9)
		this.sBit.addEventHandler("eventMB", this, this.$eh10)
		this.cond.addEventHandler("eventMB", this, this.$eh11)
		this.ins2.addEventHandler("eventMB", this, this.$eh12)
		this.rdt.addEventHandler("eventMB", this, this.$eh13)
		this.rs1.addEventHandler("eventMB", this, this.$eh14)
		this.rs2.addEventHandler("eventMB", this, this.$eh15)
		this.rs3.addEventHandler("eventMB", this, this.$eh16)
	}
	Instruction.prototype = Object.create(VObj.prototype)

	Instruction.prototype.$eh0 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		return 0
	}

	Instruction.prototype.$eh1 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		this.insPen.setRGBA(enter ? RED : BLACK)
		return 0
	}

	Instruction.prototype.$eh2 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		this.sBitPen.setRGBA(enter ? RED : BLACK)
		return 0
	}

	Instruction.prototype.$eh3 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		this.condPen.setRGBA(enter ? RED : BLACK)
		return 0
	}

	Instruction.prototype.$eh4 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		this.ins2Pen.setRGBA(enter ? RED : BLACK)
		return 0
	}

	Instruction.prototype.$eh5 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRdt!=OP_TYPE_UNUSED) {
			this.rdtPen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rdtPen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh6 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRs1!=OP_TYPE_UNUSED) {
			this.rs1Pen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rs1Pen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh7 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRs2!=OP_TYPE_UNUSED) {
			this.rs2Pen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rs2Pen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh8 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRs3!=OP_TYPE_UNUSED) {
			this.rs3Pen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rs3Pen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.getOpcode = function() {
		return this.vIns<<24|this.vRdt<<16|this.vRs1<<8|this.vRs2
	}

	Instruction.prototype.initRegs = function(remember) {
		let offset
		this.ins.setTxt("%c%s", 32, $g[37][this.vIns])
		this.cond.setTxt("%c%s", 32, $g[36][this.vCond])
		this.opTypeRdt=instrOpTypeRdt(this.vIns)
		this.opTypeRs1=instrOpTypeRs1(this.vIns)
		this.opTypeRs2=instrOpTypeRs2(this.vIns)
		this.opTypeRs3=instrOpTypeRs3(this.vIns, this.vIns2)
		this.shiftOk=shiftAllowed(this.vIns)
		this.sOk=sAllowed(this.vIns)
		if (this.sOk) {
			this.sBit.setTxt("%c%s", 32, this.vSBit)
		} else {
			this.sBit.setTxt(" ")
		}
		if (this.shiftOk) {
			this.ins2.setTxt("%c%s", 32, $g[37][this.vIns2])
		} else {
			this.ins2.setTxt("--")
		}
		if (this.opTypeRs1==OP_TYPE_REG)
		this.vRs1=(this.vRs1%16)
		if (this.opTypeRs2==OP_TYPE_REG)
		this.vRs2=(this.vRs2%16)
		if (this.opTypeRs3==OP_TYPE_REG)
		this.vRs3=(this.vRs3%16)
		if (this.opTypeRdt==OP_TYPE_UNUSED)
		this.rdt.setTxt("-")
		else 
		this.rdt.setTxt("R%d", this.vRdt)
		if (this.opTypeRs1==OP_TYPE_UNUSED) {
			this.rs1.setTxt("-")
		} else
		if (this.opTypeRs1==OP_TYPE_IMM) {
			this.rs1.setTxt("%02X", this.vRs1)
		} else {
			if (this.vIns==LDR || this.vIns==STR || this.vIns==LDRi || this.vIns==STRi) {
				this.rs1.setTxt("[R%d", this.vRs1)
			} else {
				this.rs1.setTxt("R%d", this.vRs1)
			}
		}
		if (this.opTypeRs2==OP_TYPE_UNUSED)
		this.rs2.setTxt("-")
		else 
		if (this.opTypeRs2==OP_TYPE_REG) {
			if ((this.vIns==LDR || this.vIns==STR) && this.opTypeRs3==OP_TYPE_UNUSED) {
				this.rs2.setTxt("R%d]", this.vRs2)
			} else {
				this.rs2.setTxt("R%d", this.vRs2)
			}
		} else {
			if ((this.vIns==LDRi || this.vIns==STRi) && this.opTypeRs3==OP_TYPE_UNUSED) {
				this.rs2.setTxt("%02X]", this.vRs2)
			} else {
				this.rs2.setTxt("%02X", this.vRs2)
			}
		}
		if (this.opTypeRs3==OP_TYPE_UNUSED)
		this.rs3.setTxt("-")
		else 
		if (this.opTypeRs3==OP_TYPE_REG) {
			if (this.vIns==LDR || this.vIns==STR) {
				this.rs3.setTxt("R%d]", this.vRs3)
			} else {
				this.rs3.setTxt("R%d", this.vRs3)
			}
		} else {
			if (this.vIns==LDR || this.vIns==STR) {
				this.rs3.setTxt("%02X]", this.vRs3)
			} else {
				this.rs3.setTxt("%02X", this.vRs3)
			}
		}
		if (instrIsBranch(this.vIns)) {
			if (this.vRs2&128) {
				offset=(se8(this.vRs2)/4)*this.h+this.h/2
				this.arrowUp.setPt(2, this.x-7, this.y+offset)
				this.arrowUp.setPt(3, this.x-2, this.y+offset)
				this.arrowUp.setOpacity(1)
				this.arrowDown.setOpacity(0)
			} else {
				offset=(this.vRs2/4)*this.h+this.h/2
				this.arrowDown.setPt(2, this.x+this.w+7, this.y+offset)
				this.arrowDown.setPt(3, this.x+this.w+2, this.y+offset)
				this.arrowDown.setOpacity(1)
				this.arrowUp.setOpacity(0)
			}
		} else {
			this.arrowUp.setOpacity(0)
			this.arrowDown.setOpacity(0)
		}
		if (remember) {
			let s = sprintf("i%d", this.addr/4)
			setArg(s, this.getOpcode().toString())
			$g[14]=0
			setArg("example", $g[14].toString())
		}
	}

	Instruction.prototype.setValue = function(instr, sBit, cond, rdt, rs1, rs2imm, instr2, rs3imm) {
		this.vIns=instr
		this.vSBit=sBit
		this.vCond=cond
		this.vRdt=rdt
		this.vRs1=rs1&255
		this.vRs2=rs2imm&255
		this.vIns2=instr2
		this.vRs3=rs3imm
		this.initRegs(0)
	}

	Instruction.prototype.setOpcode = function(opcode) {
		this.vIns=(opcode&4278190080)>>24
		this.vRdt=(opcode&16711680)>>16
		this.vRs1=(opcode&65280)>>8
		this.vRs2=(opcode&255)
		this.initRegs(0)
	}

	Instruction.prototype.$eh9 = function(down, flags, x, y) {
		if (!$g[23]) {
			if (down) {
				this.clk=timeMS()
				if (flags&MB_LEFT) {
					this.vIns=(this.vIns==MAX_INSTR) ? 0 : this.vIns+1
				} else
				if (flags&MB_RIGHT) {
					this.vIns=(this.vIns==0) ? MAX_INSTR : this.vIns-1
				}
			} else {
				this.clk=this.clk+500
				if (timeMS()>this.clk)
				this.vIns=0
			}
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh10 = function(down, flags, x, y) {
		if (!$g[23] && this.sOk) {
			if (down) {
				this.clk=timeMS()
				if (flags&MB_LEFT) {
					this.vSBit=(this.vSBit==" ") ? "S" : " "
				} else
				if (flags&MB_RIGHT) {
					this.vSBit=(this.vSBit==" ") ? "S" : " "
				}
			} else {
				this.clk=this.clk+500
				if (timeMS()>this.clk)
				this.vSBit=0
			}
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh11 = function(down, flags, x, y) {
		if (!$g[23]) {
			if (down) {
				this.clk=timeMS()
				if (flags&MB_LEFT) {
					this.vCond=(this.vCond==MAX_COND) ? 0 : this.vCond+1
				} else
				if (flags&MB_RIGHT) {
					this.vCond=(this.vCond==0) ? MAX_COND : this.vCond-1
				}
			} else {
				this.clk=this.clk+500
				if (timeMS()>this.clk)
				this.vCond=0
			}
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh12 = function(down, flags, x, y) {
		if (!$g[23] && this.shiftOk) {
			if (down) {
				this.clk=timeMS()
				if (flags&MB_LEFT) {
					if (this.vIns2==0) {
						this.vIns2=LSL
					} else
					if (this.vIns2==RORi) {
						this.vIns2=0
					} else
					if (this.vIns2==ROR) {
						this.vIns2=LSLi
					} else {
						this.vIns2=this.vIns2+1
					}
				} else
				if (flags&MB_RIGHT) {
					if (this.vIns2==0) {
						this.vIns2=RORi
					} else
					if (this.vIns2==LSL) {
						this.vIns2=0
					} else
					if (this.vIns2==LSLi) {
						this.vIns2=ROR
					} else {
						this.vIns2=this.vIns2-1
					}
				}
			} else {
				this.clk=this.clk+500
				if (timeMS()>this.clk)
				this.vIns2=0
			}
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh13 = function(down, flags, x, y) {
		if (!$g[23] && down && this.opTypeRdt!=OP_TYPE_UNUSED) {
			if (flags&MB_LEFT) {
				this.vRdt=(this.vRdt==15) ? 0 : this.vRdt+1
			} else
			if (flags&MB_RIGHT)
			this.vRdt=(this.vRdt==0) ? 15 : this.vRdt-1
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh14 = function(down, flags, x, y) {
		if (!$g[23] && down) {
			if (flags&MB_LEFT) {
				if (this.opTypeRs1==OP_TYPE_REG) {
					this.vRs1=(this.vRs1+1)%16
				} else
				if (this.opTypeRs1==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs1=(this.vRs1+1)%256
				}
			} else
			if (flags&MB_RIGHT) {
				if (this.opTypeRs1==OP_TYPE_REG) {
					this.vRs1=(this.vRs1-1)%16
					if (this.vRs1<0)
					this.vRs1=16+this.vRs1
				} else
				if (this.opTypeRs1==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs1=(this.vRs1-1)%256
					if (this.vRs1<0)
					this.vRs1=256+this.vRs1
				}
			} else {
				if (this.opTypeRs1==OP_TYPE_IMM) {
					this.clk=this.clk+500
					if (timeMS()>this.clk)
					this.vRs1=0
				}
			}
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh15 = function(down, flags, x, y) {
		if (!$g[23] && down) {
			if (flags&MB_LEFT) {
				if (this.opTypeRs2==OP_TYPE_REG) {
					this.vRs2=(this.vRs2+1)%16
				} else
				if (this.opTypeRs2==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs2=(this.vRs2+1)%256
				}
			} else
			if (flags&MB_RIGHT) {
				if (this.opTypeRs2==OP_TYPE_REG) {
					this.vRs2=(this.vRs2-1)%16
					if (this.vRs2<0)
					this.vRs2=16+this.vRs2
				} else
				if (this.opTypeRs2==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs2=(this.vRs2-1)%256
					if (this.vRs2<0)
					this.vRs2=256+this.vRs2
				}
			} else {
				if (this.opTypeRs2==OP_TYPE_IMM) {
					this.clk=this.clk+500
					if (timeMS()>this.clk)
					this.vRs2=0
				}
			}
			this.initRegs(1)
		}
	}

	Instruction.prototype.$eh16 = function(down, flags, x, y) {
		if (!$g[23] && down) {
			if (flags&MB_LEFT) {
				if (this.opTypeRs3==OP_TYPE_REG) {
					this.vRs3=(this.vRs3+1)%16
				} else
				if (this.opTypeRs3==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs3=(this.vRs3+1)%256
				}
			} else
			if (flags&MB_RIGHT) {
				if (this.opTypeRs3==OP_TYPE_REG) {
					this.vRs3=(this.vRs3-1)%16
					if (this.vRs3<0)
					this.vRs3=16+this.vRs3
				} else
				if (this.opTypeRs3==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs3=(this.vRs3-1)%256
					if (this.vRs3<0)
					this.vRs3=256+this.vRs3
				}
			} else {
				if (this.opTypeRs3==OP_TYPE_IMM) {
					this.clk=this.clk+500
					if (timeMS()>this.clk)
					this.vRs3=0
				}
			}
			this.initRegs(1)
		}
	}

	function InstructionMemory(x, y, w, h) {
		VObj.call(this)
		this.headingsPen = new SolidPen(0, 0, RED)
		this.headingsFont = new Font("Calibri", 18)
		this.addrLabel = new Rectangle2($g[0], 0, 0, 0, 0, x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Addr")
		this.instrLabel = new Rectangle2($g[0], 0, 0, 0, 0, 47+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Instr")
		this.sBitLabel = new Rectangle2($g[0], 0, 0, 0, 0, 99+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "S")
		this.condLabel = new Rectangle2($g[0], 0, 0, 0, 0, 130+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Cond")
		this.rdLabel = new Rectangle2($g[0], 0, 0, 0, 0, 175+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Rd")
		this.op1Label = new Rectangle2($g[0], 0, 0, 0, 0, 210+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Op1")
		this.op2Label = new Rectangle2($g[0], 0, 0, 0, 0, 250+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Op2")
		this.offsetLabel = new Rectangle2($g[0], 0, 0, 0, 0, 300+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Offset")
		this.ih = (h-12-4)/32
		this.instruction = newArray(32)
		this.active = 31
		this.r = new Rectangle2($g[0], 0, 0, $g[1], $g[38], x, y+12, w, h-12)
		this.r.setRounded(2, 2)
		new Rectangle2($g[0], 0, 0, $g[1], $g[39], x+2, y+12+2, w-4, h-12-4)
		for (this.lp1 = 0; this.lp1<32; this.lp1++)
		this.instruction[this.lp1]=new Instruction(x+2, y+12+2+this.lp1*this.ih, w-4, this.ih, this.lp1*4)
	}
	InstructionMemory.prototype = Object.create(VObj.prototype)

	InstructionMemory.prototype.setValue = function(addr, instr, sBit, cond, rdt, rs1, rs2imm, instr2, rs3imm) {
		this.instruction[addr/4].setValue(instr, sBit, cond, rdt, rs1, rs2imm, instr2, rs3imm)
	}

	InstructionMemory.prototype.getOpcode = function(addr) {
		return this.instruction[addr/4].getOpcode()
	}

	InstructionMemory.prototype.setOpcode = function(addr, opcode) {
		this.instruction[addr/4].setOpcode(opcode)
	}

	InstructionMemory.prototype.setActive = function(addr) {
		this.instruction[this.active].dot.setOpacity(0)
		this.active=addr/4
		this.instruction[this.active].dot.setOpacity(1)
	}

	function InstructionRegister(x, y, w, h, caption) {
		VObj.call(this)
		this.vSBit = " "
		this.vIns = EMPTY, this.vCond = 0, this.vRdt = 0, this.vRs1 = 0, this.vRs2 = 0, this.vIns2 = EMPTY, this.vRs3 = 0
		this.nSBit = " "
		this.nIns = EMPTY, this.nCond = 0, this.nRdt = 0, this.nRs1 = 0, this.nRs2 = 0, this.nIns2 = EMPTY, this.nRs3 = 0
		this.IMFont = new Font("Calibri", 18)
		this.txt = "EMPTY"
		this.r1 = new Rectangle2($g[0], 0, 0, $g[1], $g[5], x, y, w, h)
		this.r1.setRounded(2, 2)
		this.r2 = new Rectangle2($g[0], 0, 0, $g[1], $g[12], x+5, y+4, w-11, h-24)
		this.r2.setRounded(2, 2)
		this.r3 = new Rectangle2($g[0], 0, 0, 0, 0, x, y+h-20, w, 22, $g[4], $g[16], caption)
		this.label = new Txt($g[0], $g[18], 0, x+w/2, y+(h-24)/2+4, 0, this.IMFont, this.txt)
		this.label.rotate(-90)
	}
	InstructionRegister.prototype = Object.create(VObj.prototype)

	InstructionRegister.prototype.setNewValue = function(instr, sBit, cond, rdt, rs1, rs2, instr2, rs3) {
		this.nIns=instr
		this.nSBit=sBit
		this.nCond=cond
		this.nRdt=rdt
		this.nRs1=rs1
		this.nRs2=rs2
		this.nIns2=instr2
		this.nRs3=rs3
	}

	InstructionRegister.prototype.setNewInstruction = function(i) {
		this.nIns=i.vIns
		this.nSBit=i.vSBit
		this.nCond=i.vCond
		this.nRdt=i.vRdt
		this.nRs1=i.vRs1
		this.nRs2=i.vRs2
		this.nIns2=i.vIns2
		this.nRs3=i.vRs3
	}

	InstructionRegister.prototype.getNewInstrTxt = function() {
		return instrText(this.nIns, this.nSBit, this.nCond, this.nRdt, this.nRs1, this.nRs2, this.nIns2, this.nRs3)
	}

	InstructionRegister.prototype.setOpacity = function(opacity) {
		this.r1.setOpacity(opacity)
		this.r2.setOpacity(opacity)
		this.r3.setOpacity(opacity)
		this.label.setOpacity(opacity)
	}

	InstructionRegister.prototype.reset = function() {
		this.vIns=EMPTY
		this.vIns2=EMPTY
		this.vSBit=" "
		this.vRdt=this.vCond=this.vRs1=this.vRs2=this.vRs3=0
		this.nIns=EMPTY
		this.nIns2=EMPTY
		this.nSBit=" "
		this.nRdt=this.nRs1=this.nRs2=this.nRs3=0
		this.txt=instrText(this.vIns, this.vSBit, this.vCond, this.vRdt, this.vRs1, this.vRs2, this.nIns2, this.nRs3)
		this.label.setTxt(this.txt)
	}

	function Register(x, y, w, h, labelPos, caption) {
		VObj.call(this)
		this.vx, this.vy, this.vw, this.vh
		this.value = 0, this.newValue = 0
		this.tag = 0, this.newTag = 0
		this.useTag = 0, this.invalid = 0
		this.fixed = 0
		this.label
		this.r1 = new Rectangle2($g[0], 0, 0, $g[1], $g[42], x, y, w, h)
		this.r1.setRounded(2, 2)
		this.bg1 = new Rectangle2($g[0], $g[18], 0, 0, $g[12], this.vx, this.vy, this.vw/2, this.vh)
		this.bg2 = new Rectangle2($g[0], $g[18], 0, 0, $g[12], this.vx+this.vw/2, this.vy, this.vw/2, this.vh)
		if (w>=h) {
			this.vy=y+4
			this.vw=w-38
			this.vh=h-9
			if (labelPos==LEFT) {
				this.r2 = new Rectangle($g[0], 0, 0, 0, 0, x+17-1, y+h/2, -17, -h/2, 34, h, 0, $g[16], caption)
				this.r2.rotate(-90)
				this.vx=x+32
			} else
			if (labelPos==RIGHT) {
				this.r2=new Rectangle($g[0], 0, 0, 0, 0, x+w-19, y+h/2, -19, -h/2, 38, h, 0, $g[16], caption)
				this.r2.rotate(-90)
				this.vx=x+5
			}
		} else {
			this.vx=x+5
			this.vw=w-11
			this.vh=h-31
			if (labelPos==TOP) {
				this.r2=new Rectangle2($g[0], 0, 0, 0, 0, x, y, w, 31, 0, $g[16], caption)
				this.vy=y+26
			} else
			if (labelPos==BOTTOM) {
				this.r2=new Rectangle2($g[0], 0, 0, 0, 0, x, y+h-22, w, 22, 0, $g[16], caption)
				this.vy=y+4
			}
		}
		if (w>=h) {
			this.label=new Rectangle2($g[0], $g[18], 0, 0, $g[13], this.vx, this.vy, this.vw, this.vh, 0, $g[16], "%02X", this.value)
		} else {
			this.label=new Rectangle($g[0], $g[18], 0, 0, $g[13], this.vx+this.vw/2, this.vy+this.vh/2, -this.vw/2, -this.vh/2, this.vw, this.vh, 0, $g[16], "%02X", this.value)
		}
		this.label.setRounded(2, 2)
		this.label.addEventHandler("eventEE", this, this.$eh17)
		this.label.addEventHandler("eventMB", this, this.$eh18)
		this.hmode = 0
	}
	Register.prototype = Object.create(VObj.prototype)

	Register.prototype.setFixed = function() {
		this.fixed=1
	}

	Register.prototype.setOpacity = function(opacity) {
		this.r1.setOpacity(opacity)
		this.r2.setOpacity(opacity)
		this.bg1.setOpacity(opacity)
		this.bg2.setOpacity(opacity)
		this.label.setOpacity(opacity)
	}

	Register.prototype.rotateText = function(deg) {
		this.r2.rotate(deg)
	}

	Register.prototype.updateLabel = function() {
		if (this.invalid) {
			this.label.setTxt("INV")
		} else
		if (this.useTag) {
			if (this.tag>=0)
			this.label.setTxt("R%d:%02X", this.tag, this.value)
			else 
			this.label.setTxt("--:%02X", this.value)
		} else {
			this.label.setTxt("%02X", this.value)
		}
		return 0
	}

	Register.prototype.$eh17 = function(enter, x, y) {
		if (this.fixed==0)
		this.label.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	Register.prototype.$eh18 = function(down, flags, x, y) {
		if (this.fixed==0 && down) {
			if (flags&MB_LEFT) {
				this.value=(this.value+1)&255
			} else
			if (flags&MB_RIGHT) {
				this.value=(this.value-1)&255
			}
			this.updateLabel()
		}
		return 0
	}

	Register.prototype.setValue = function(val) {
		this.value=val
		this.invalid=0
		this.updateLabel()
	}

	Register.prototype.setNewValue = function(val) {
		this.newValue=val
	}

	Register.prototype.setNewTag = function(t) {
		this.newTag=t
	}

	Register.prototype.setTag = function(t) {
		this.useTag=1
		this.tag=t
		this.updateLabel()
	}

	Register.prototype.setInvalid = function(i) {
		this.useTag=1
		this.invalid=i
	}

	Register.prototype.tagMatches = function(t) {
		return (this.invalid) ? 0 : (this.tag==t) ? 1 : 0
	}

	Register.prototype.highlight = function(brush) {
		if (this.hmode==0) {
			this.bg1.setBrush(brush)
			this.bg2.setBrush(brush)
			this.hmode=1
		} else {
			this.bg2.setBrush(brush)
		}
	}

	Register.prototype.unHighlight = function() {
		this.bg1.setBrush($g[12])
		this.bg2.setBrush($g[12])
		this.hmode=0
	}

	Register.prototype.reset = function() {
		this.value=0
		this.newValue=0
		this.tag=0
		this.newTag=0
		this.useTag=0
		this.invalid=0
		this.unHighlight()
		this.updateLabel()
	}

	function Component(_x, _y, _w, _h, caption) {
		VObj.call(this)
		this.x = _x
		this.y = _y
		this.w = _w
		this.h = _h
		this.bg = new Rectangle2($g[0], $g[20], 0, $g[1], $g[44], this.x, this.y, this.w, this.h)
		this.bg.setRounded(2, 2)
		this.label
		if (this.w>=this.h) {
			this.label=new Rectangle2($g[0], $g[20], 0, 0, 0, this.x, this.y, this.w, this.h, 0, $g[45], caption)
		} else {
			this.label=new Rectangle($g[0], $g[20], 0, 0, 0, this.x+this.w/2-3, this.y+this.h/2, -this.w/2, -this.h/2, this.w, this.h, 0, $g[45], caption)
			this.label.rotate(-90)
		}
	}
	Component.prototype = Object.create(VObj.prototype)

	Component.prototype.setOpacity = function(opacity) {
		this.bg.setOpacity(opacity)
		this.label.setOpacity(opacity)
	}

	function ALU(x, y, w, h) {
		VObj.call(this)
		this.alu = new Polygon($g[0], 0, ABSOLUTE, $g[1], $g[44], x, y, 0, 0, w, h/4, w, 3*h/4, 0, h, 0, 5*h/8, w/2, h/2, 0, 3*h/8)
		new Rectangle2($g[0], 0, 0, 0, 0, x, y-10, w, 10, 0, $g[45], "ALU")
		this.op = ""
		this.txtOp = new Rectangle($g[0], $g[18], 0, 0, $g[11], x, y+h/2, 0, -h/12, 2*w/3, h/6, $g[4], $g[45], this.op)
		this.txtOp.setOpacity(0)
		this.txtOp.setRounded(2, 2)
		this.txtResult = new Rectangle($g[0], $g[20], 0, $g[1], $g[13], x+3*w/4, y+h/2, 0, -h/12, w/2, h/6, $g[1], $g[45])
		this.txtResult.setOpacity(0)
		this.txtResult.setRounded(2, 2)
	}
	ALU.prototype = Object.create(VObj.prototype)

	ALU.prototype.setTxtOp = function(vIns) {
		this.op=""
		if (vIns>=ADD && vIns<=BIC) {
			this.op=$g[37][vIns]
		} else
		if (vIns>=ADDi && vIns<=RSCi) {
			this.op=$g[37][vIns-15]
		} else
		if (vIns>=ANDi && vIns<=BICi) {
			this.op=$g[37][vIns-14]
		} else
		if (vIns>=LSL && vIns<=ROR) {
		} else
		if (vIns>=LSLi && vIns<=RORi) {
		} else
		if (vIns==CMN || vIns==CMNi) {
			this.op="ADD"
		} else
		if (vIns==CMP || vIns==CMPi) {
			this.op="SUB"
		} else
		if (vIns==MVN || vIns==MVNi) {
			this.op="XOR"
		} else
		if (vIns==LDR || vIns==STR) {
			this.op="ADD"
		}
		this.txtOp.setTxt(this.op)
		this.txtOp.setOpacity(1)
	}

	function AnimPipe() {
		VObj.call(this)
		this.w = 10
		this.n = 0
		this.px = newArray(0)
		this.py = newArray(0)
		this.ls = newArray(0)
		this.ll = 0
		this.head = 1
		this.bgPen0 = new SolidPen(SOLID, this.w, GRAY192, BEVEL_JOIN|BUTT_END)
		this.bgPen1 = new SolidPen(SOLID, this.w, GRAY192, BEVEL_JOIN|ARROW60_END)
		this.fgPen0 = new SolidPen(SOLID, this.w, RED, BEVEL_JOIN|BUTT_END)
		this.fgPen1 = new SolidPen(SOLID, this.w, RED, BEVEL_JOIN|ARROW60_END)
		this.bgLine = new Line($g[0], $g[19], 0, this.bgPen1, 0, 0)
		this.fgLine = new Line($g[0], $g[20], 0, this.fgPen0, 0, 0)
	}
	AnimPipe.prototype = Object.create(VObj.prototype)

	AnimPipe.prototype.setOpacity = function(opacity) {
		this.bgLine.setOpacity(opacity)
		this.fgLine.setOpacity(opacity)
	}

	AnimPipe.prototype.setHead = function(h) {
		this.head=h ? 1 : 0
		this.bgLine.setPen(this.head ? this.bgPen1 : this.bgPen0)
		this.fgLine.setPen(this.fgPen0)
	}

	AnimPipe.prototype.addPoint = function(x, y) {
		this.px[this.n]=x
		this.py[this.n]=y
		this.bgLine.setPt(this.n, x, y)
		this.n++
	}

	AnimPipe.prototype.calcLength = function() {
		let dx, dy
		this.ll=0
		for (let i = 0; i<this.n-1; i++) {
			dx=this.px[i+1]-this.px[i]
			dy=this.py[i+1]-this.py[i]
			this.ll+=this.ls[i]=sqrt(dx*dx+dy*dy)
		}
	}

	AnimPipe.prototype.setPoint = function(n, x, y) {
		this.px[n]=x
		this.py[n]=y
		this.bgLine.setPt(n, x, y)
	}

	AnimPipe.prototype.reset = function() {
		this.fgLine.setNPts(0)
		this.fgLine.setPen(this.fgPen0)
	}

	function AnimatedClock($grp, x, y, w, h) {
		Group.call(this, $grp, 0, 0, x, y, 0, 0, w, h)
		this.cw = w
		this.chw = this.cw/2
		this.ch = h-6
		this.stall = 0, this.type = 0
		this.setClipPath(R$(0, 0, w, h))
		this.clkDisplay = new Rectangle2(this, 0, 0, $g[1], $g[12], 0, 0, w, h)
		this.clkDisplay.setRounded(2, 2)
		this.prev_clock = new Line(this, $g[20], 0, $g[46], -this.chw+this.chw/5, 3+this.ch, 0, 0, 0, -this.ch, this.chw, 0, 0, this.ch, this.chw, 0)
		this.next_clock = new Line(this, $g[20], 0, $g[47], this.chw+this.chw/5, 3+this.ch, 0, 0, 0, -this.ch, this.chw, 0, 0, this.ch, this.chw, 0)
		this.dot = new Rectangle2(this, $g[20], 0, 0, $g[5], w/2-3, h-6, 6, 6)
		this.canUpdate
	}
	AnimatedClock.prototype = Object.create(Group.prototype)

	AnimatedClock.prototype.setStall = function(s, t) {
		this.stall=s
		this.type=t
		if (this.canUpdate)
		this.prev_clock.setPen(this.stall ? (this.type ? $g[48] : $g[46]) : $g[47])
	}

	function Button(x, y, w, h, caption, ID) {
		VObj.call(this)
		this.label = new Rectangle2($g[0], 0, 0, $g[1], $g[49], x, y, w, h, $g[1], $g[16], caption)
		this.label.addEventHandler("eventEE", this, this.$eh19)
	}
	Button.prototype = Object.create(VObj.prototype)

	Button.prototype.$eh19 = function(enter, x, y) {
		this.label.setBrush(enter ? $g[50] : $g[49])
		return 0
	}

	Button.prototype.setCaption = function(caption) {
		this.label.setTxt(caption)
	}

	Button.prototype.showLocked = function(locked) {
		this.label.setFont(locked ? $g[17] : $g[16])
	}

	function CPSR(x, y, w, h, forwarding) {
		VObj.call(this)
		this.n = 0
		this.z = 0
		this.c = 0
		this.v = 0
		this.nN = 0
		this.nZ = 0
		this.nC = 0
		this.nV = 0
		this.invalid = 0
		this.nx = x
		this.zx = x+w/4
		this.cx = x+2*(w/4)
		this.vx = x+3*(w/4)
		this.ny = y+h/3
		this.zy = y+h/3
		this.cy = y+h/3
		this.vy = y+h/3
		if (forwarding) {
			$g[53]=new Font("Calibri", 16)
			$g[54]=new Font("Calibri", 16)
		}
		this.outer
		this.nLabel
		this.zLabel
		this.cLabel
		this.vLabel
		this.nValue
		this.zValue
		this.cValue
		this.vValue
		if (h>w) {
			this.nx=x+w/3
			this.zx=x+w/3
			this.cx=x+w/3
			this.vx=x+w/3
			this.ny=y
			this.zy=y+h/4
			this.cy=y+2*(h/4)
			this.vy=y+3*(h/4)
			this.outer=new Rectangle2($g[0], 0, 0, $g[1], $g[51], x, y, w, h+4)
			this.nLabel=new Rectangle($g[0], 0, 0, 0, 0, x+2, this.ny, 0, 0, w/4, h/3, 0, $g[53], "N")
			this.zLabel=new Rectangle($g[0], 0, 0, 0, 0, x+2, this.zy, 0, 0, w/4, h/3, 0, $g[53], "Z")
			this.cLabel=new Rectangle($g[0], 0, 0, 0, 0, x+2, this.cy, 0, 0, w/4, h/3, 0, $g[53], "C")
			this.vLabel=new Rectangle($g[0], 0, 0, 0, 0, x+2, this.vy, 0, 0, w/4, h/3, 0, $g[53], "V")
			this.nValue=new Rectangle2($g[0], $g[18], 0, 0, $g[13], this.nx, this.ny+4, 2*w/3-4, (h/4)-4, 0, $g[54], "%01X", this.n)
			this.zValue=new Rectangle2($g[0], $g[18], 0, 0, $g[13], this.zx, this.zy+4, 2*w/3-4, (h/4)-4, 0, $g[54], "%01X", this.z)
			this.cValue=new Rectangle2($g[0], $g[18], 0, 0, $g[13], this.cx, this.cy+4, 2*w/3-4, (h/4)-4, 0, $g[54], "%01X", this.c)
			this.vValue=new Rectangle2($g[0], $g[18], 0, 0, $g[13], this.vx, this.vy+4, 2*w/3-4, (h/4)-4, 0, $g[54], "%01X", this.v)
		} else {
			this.outer=new Rectangle2($g[0], 0, 0, $g[1], $g[51], x, y, w+4, h)
			this.nLabel=new Rectangle($g[0], 0, 0, 0, 0, this.nx, y, 0, 0, w/4, h/3, 0, $g[53], "N")
			this.zLabel=new Rectangle($g[0], 0, 0, 0, 0, this.zx, y, 0, 0, w/4, h/3, 0, $g[53], "Z")
			this.cLabel=new Rectangle($g[0], 0, 0, 0, 0, this.cx, y, 0, 0, w/4, h/3, 0, $g[53], "C")
			this.vLabel=new Rectangle($g[0], 0, 0, 0, 0, this.vx, y, 0, 0, w/4, h/3, 0, $g[53], "V")
			this.nValue=new Rectangle2($g[0], $g[18], 0, 0, $g[13], this.nx+4, this.ny, (w/4)-4, 2*h/3-4, 0, $g[54], "%01X", this.n)
			this.zValue=new Rectangle2($g[0], $g[18], 0, 0, $g[13], this.zx+4, this.zy, (w/4)-4, 2*h/3-4, 0, $g[54], "%01X", this.z)
			this.cValue=new Rectangle2($g[0], $g[18], 0, 0, $g[13], this.cx+4, this.cy, (w/4)-4, 2*h/3-4, 0, $g[54], "%01X", this.c)
			this.vValue=new Rectangle2($g[0], $g[18], 0, 0, $g[13], this.vx+4, this.vy, (w/4)-4, 2*h/3-4, 0, $g[54], "%01X", this.v)
		}
		this.nValue.addEventHandler("eventEE", this, this.$eh20)
		this.zValue.addEventHandler("eventEE", this, this.$eh21)
		this.cValue.addEventHandler("eventEE", this, this.$eh22)
		this.vValue.addEventHandler("eventEE", this, this.$eh23)
		this.nValue.addEventHandler("eventMB", this, this.$eh24)
		this.zValue.addEventHandler("eventMB", this, this.$eh25)
		this.cValue.addEventHandler("eventMB", this, this.$eh26)
		this.vValue.addEventHandler("eventMB", this, this.$eh27)
		this.hmode = 0
	}
	CPSR.prototype = Object.create(VObj.prototype)

	CPSR.prototype.updateNValue = function() {
		this.nValue.setTxt("%01X", this.n)
		return 0
	}

	CPSR.prototype.updateZValue = function() {
		this.zValue.setTxt("%01X", this.z)
		return 0
	}

	CPSR.prototype.updateCValue = function() {
		this.cValue.setTxt("%01X", this.c)
		return 0
	}

	CPSR.prototype.updateVValue = function() {
		this.vValue.setTxt("%01X", this.v)
		return 0
	}

	CPSR.prototype.updateValues = function() {
		this.updateNValue()
		this.updateZValue()
		this.updateCValue()
		this.updateVValue()
	}

	CPSR.prototype.$eh20 = function(enter, x, y) {
		this.nValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh21 = function(enter, x, y) {
		this.zValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh22 = function(enter, x, y) {
		this.cValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh23 = function(enter, x, y) {
		this.vValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh24 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.n=(this.n+1)%2
			}
			this.updateNValue()
		}
		return 0
	}

	CPSR.prototype.$eh25 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.z=(this.z+1)%2
			}
			this.updateZValue()
		}
		return 0
	}

	CPSR.prototype.$eh26 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.c=(this.c+1)%2
			}
			this.updateCValue()
		}
		return 0
	}

	CPSR.prototype.$eh27 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.v=(this.v+1)%2
			}
			this.updateVValue()
		}
		return 0
	}

	CPSR.prototype.setNValue = function(val) {
		this.n=val
		this.updateNValue()
	}

	CPSR.prototype.setZValue = function(val) {
		this.z=val
		this.updateZValue()
	}

	CPSR.prototype.setCValue = function(val) {
		this.c=val
		this.updateCValue()
	}

	CPSR.prototype.setVValue = function(val) {
		this.v=val
		this.updateVValue()
	}

	CPSR.prototype.setNNValue = function(val) {
		this.nN=val
	}

	CPSR.prototype.setNZValue = function(val) {
		this.nZ=val
	}

	CPSR.prototype.setNCValue = function(val) {
		this.nC=val
	}

	CPSR.prototype.setNVValue = function(val) {
		this.nV=val
	}

	CPSR.prototype.update = function() {
		this.n=this.nN
		this.z=this.nZ
		this.c=this.nC
		this.v=this.nV
		this.invalid=0
		this.updateValues()
	}

	CPSR.prototype.setInvalid = function(val) {
		this.invalid=val
		if (this.invalid) {
			this.nValue.setTxt("X")
			this.zValue.setTxt("X")
			this.cValue.setTxt("X")
			this.vValue.setTxt("X")
		}
	}

	CPSR.prototype.setOpacity = function(opacity) {
		this.outer.setOpacity(opacity)
		this.nLabel.setOpacity(opacity)
		this.zLabel.setOpacity(opacity)
		this.cLabel.setOpacity(opacity)
		this.vLabel.setOpacity(opacity)
		this.nValue.setOpacity(opacity)
		this.zValue.setOpacity(opacity)
		this.cValue.setOpacity(opacity)
		this.vValue.setOpacity(opacity)
	}

	CPSR.prototype.highlight = function(brush) {
	}

	CPSR.prototype.unHighlight = function() {
	}

	CPSR.prototype.reset = function() {
		this.n=0
		this.z=0
		this.c=0
		this.v=0
		this.unHighlight()
		this.updateValues()
		this.setInvalid(1)
	}

	function StackPointer(_x1, _y1, _x2, _y2, w, _regWidth) {
		VObj.call(this)
		this.x1 = _x1, this.y1 = _y1, this.x2 = _x2, this.y2 = _y2, this.regWidth = _regWidth
		this.fgPen0 = new SolidPen(SOLID, w, RED, BEVEL_JOIN|BUTT_END)
		this.fgPen1 = new SolidPen(SOLID, w, RED, BEVEL_JOIN|ARROW60_END)
		this.bodies = newArray(8)
		this.heads = newArray(8)
		this.bodies[0]=new Line2($g[0], 0, ABSOLUTE, this.fgPen0, this.x1, this.y1-1*this.regWidth, this.x2-w, this.y2-1*this.regWidth)
		this.bodies[1]=new Line2($g[0], 0, ABSOLUTE, this.fgPen0, this.x1, this.y1+0*this.regWidth, this.x2-w, this.y2+0*this.regWidth)
		this.bodies[2]=new Line2($g[0], 0, ABSOLUTE, this.fgPen0, this.x1, this.y1+1*this.regWidth, this.x2-w, this.y2+1*this.regWidth)
		this.bodies[3]=new Line2($g[0], 0, ABSOLUTE, this.fgPen0, this.x1, this.y1+2*this.regWidth, this.x2-w, this.y2+2*this.regWidth)
		this.bodies[4]=new Line2($g[0], 0, ABSOLUTE, this.fgPen0, this.x1, this.y1+3*this.regWidth, this.x2-w, this.y2+3*this.regWidth)
		this.bodies[5]=new Line2($g[0], 0, ABSOLUTE, this.fgPen0, this.x1, this.y1+4*this.regWidth, this.x2-w, this.y2+4*this.regWidth)
		this.bodies[6]=new Line2($g[0], 0, ABSOLUTE, this.fgPen0, this.x1, this.y1+5*this.regWidth, this.x2-w, this.y2+5*this.regWidth)
		this.bodies[7]=new Line2($g[0], 0, ABSOLUTE, this.fgPen0, this.x1, this.y1+6*this.regWidth, this.x2-w, this.y2+6*this.regWidth)
		this.heads[0]=new Line2($g[0], 0, ABSOLUTE, this.fgPen1, this.x2-w, this.y2-1*this.regWidth, this.x2, this.y2-1*this.regWidth)
		this.heads[1]=new Line2($g[0], 0, ABSOLUTE, this.fgPen1, this.x2-w, this.y2+0*this.regWidth, this.x2, this.y2+0*this.regWidth)
		this.heads[2]=new Line2($g[0], 0, ABSOLUTE, this.fgPen1, this.x2-w, this.y2+1*this.regWidth, this.x2, this.y2+1*this.regWidth)
		this.heads[3]=new Line2($g[0], 0, ABSOLUTE, this.fgPen1, this.x2-w, this.y2+2*this.regWidth, this.x2, this.y2+2*this.regWidth)
		this.heads[4]=new Line2($g[0], 0, ABSOLUTE, this.fgPen1, this.x2-w, this.y2+3*this.regWidth, this.x2, this.y2+3*this.regWidth)
		this.heads[5]=new Line2($g[0], 0, ABSOLUTE, this.fgPen1, this.x2-w, this.y2+4*this.regWidth, this.x2, this.y2+4*this.regWidth)
		this.heads[6]=new Line2($g[0], 0, ABSOLUTE, this.fgPen1, this.x2-w, this.y2+5*this.regWidth, this.x2, this.y2+5*this.regWidth)
		this.heads[7]=new Line2($g[0], 0, ABSOLUTE, this.fgPen1, this.x2-w, this.y2+6*this.regWidth, this.x2, this.y2+6*this.regWidth)
		this.setPosOpacity(1, 0)
		this.setPosOpacity(2, 0)
		this.setPosOpacity(3, 0)
		this.setPosOpacity(4, 0)
		this.setPosOpacity(5, 0)
		this.setPosOpacity(6, 0)
		this.setPosOpacity(7, 0)
		this.setPosOpacity(0, 1)
	}
	StackPointer.prototype = Object.create(VObj.prototype)

	StackPointer.prototype.setPosOpacity = function(position, opacity) {
		this.setOpacity(0)
		this.bodies[position].setOpacity(opacity)
		this.heads[position].setOpacity(opacity)
	}

	StackPointer.prototype.setOpacity = function(opacity) {
		let i = 0
		while (i<8) {
			this.bodies[i].setOpacity(0)
			this.heads[i].setOpacity(0)
			i++
		}
	}

	StackPointer.prototype.moveSP = function(sp) {
		let position = ((64-sp)/4)
		this.setPosOpacity(position, 1)
	}

	function resetWires() {
		$g[89].reset()
		$g[87].reset()
		$g[88].setOpacity(0)
		$g[92].reset()
		$g[93].reset()
		$g[94].reset()
		$g[95].reset()
		$g[96].reset()
		$g[97].reset()
		$g[98].reset()
		$g[99].reset()
		$g[112].reset()
		$g[113].reset()
		$g[116].reset()
		$g[115].reset()
		$g[118].reset()
		$g[119].reset()
		$g[120].setOpacity(0)
		$g[121].reset()
		$g[122].setOpacity(0)
		$g[117].setOpacity(0)
		$g[130].reset()
		$g[131].reset()
		$g[132].reset()
		$g[133].reset()
		$g[136].reset()
		$g[137].reset()
		$g[138].setOpacity(0)
		$g[139].reset()
		$g[140].setOpacity(0)
		$g[141].reset()
		$g[142].setOpacity(0)
		$g[143].reset()
		$g[144].reset()
		$g[145].reset()
		$g[146].reset()
		$g[147].reset()
		$g[148].reset()
		$g[149].reset()
		$g[150].reset()
		$g[129].txtOp.setOpacity(0)
		$g[129].txtResult.setOpacity(0)
		$g[134].reset()
		$g[135].reset()
		$g[176].reset()
		$g[177].reset()
		$g[178].reset()
		$g[179].reset()
		$g[180].reset()
		$g[181].reset()
		$g[154].setPen($g[107])
		$g[155].setPen($g[107])
		$g[156].setPen($g[107])
		$g[157].setPen($g[107])
		$g[162].setPen($g[109])
		$g[158].setPen($g[107])
		$g[159].setPen($g[107])
		$g[160].setPen($g[107])
		$g[161].setPen($g[107])
		$g[164].setPen($g[109])
		$g[91].reset()
		$g[90].reset()
		$g[184].reset()
		$g[185].reset()
	}

	function resetRegisters() {
		$g[79].reset()
		$g[79].setValue(124)
		$g[101].reset()
		$g[124].reset()
		$g[125].reset()
		$g[168].reset()
		$g[167].reset()
		$g[183].reset()
		$g[152].reset()
		$g[153].reset()
		$g[81][0].reset()
		$g[81][1].reset()
		$g[82][0].reset()
		$g[82][1].reset()
		$g[100].reset()
		$g[123].reset()
		$g[166].reset()
		$g[182].reset()
		$g[77].setActive(124)
		$g[167].setInvalid(1)
		$g[167].updateLabel()
		$g[183].setInvalid(1)
		$g[183].updateLabel()
		$g[81][0].setValue(-1)
		$g[81][0].setInvalid(1)
		$g[81][0].updateLabel()
		$g[81][1].setValue(-1)
		$g[81][1].setInvalid(1)
		$g[81][1].updateLabel()
		$g[152].setInvalid(1)
		$g[153].setInvalid(1)
		$g[34]=0
		$g[35]=0
		$g[74].setTxt("%4d", 0)
		$g[75].setTxt("%4d", 0)
	}

	function resetCircuit() {
		resetRegisters()
		resetWires()
	}

	function showBTB(opacity) {
		$g[80].setOpacity(opacity)
		$g[81][0].setOpacity(opacity)
		$g[81][1].setOpacity(opacity)
		$g[82][0].setOpacity(opacity)
		$g[82][1].setOpacity(opacity)
		$g[95].setOpacity(opacity)
		$g[112].setOpacity(opacity)
		$g[83].setOpacity(opacity)
		$g[98].setOpacity(opacity)
		$g[92].setOpacity(opacity)
		$g[116].setOpacity(opacity)
		$g[105].setOpacity(opacity)
		$g[115].setOpacity(opacity)
	}

	function showALUForwarding(opacity) {
		if (opacity==0) {
			$g[133].setPoint(0, 1136, 452)
			$g[133].setPoint(1, 1351, 452)
			$g[136].setPoint(0, ($g[30]) ? 1136 : 1209, 551)
			$g[136].setPoint(1, 1301, 551)
			$g[137].setPoint(2, 1208, 573)
			$g[137].setPoint(3, 1301, 573)
			$g[133].setHead(0)
		} else {
			$g[133].setPoint(0, 1136, 485)
			$g[133].setPoint(1, 1301, 485)
			$g[136].setPoint(0, 1136, 529)
			$g[136].setPoint(1, 1301, 529)
			$g[137].setPoint(2, 1208, 551)
			$g[137].setPoint(3, 1301, 551)
			$g[133].setHead(1)
		}
		$g[126].setOpacity(opacity)
		$g[131].setOpacity(opacity)
		$g[132].setOpacity(opacity)
		$g[144].setOpacity(opacity)
		$g[143].setOpacity(opacity)
	}

	function showSMDRForwarding(opacity) {
		if (opacity==0) {
			$g[147].setPoint(1, 1159, 727)
			$g[147].setPoint(2, 1348, 727)
			$g[147].setHead(0)
		} else {
			$g[147].setPoint(1, 1159, 529)
			$g[147].setPoint(2, 1159, 734)
			$g[147].setPoint(3, 1301, 734)
			$g[147].setHead(1)
		}
		$g[128].setOpacity(opacity)
		$g[145].setOpacity(opacity)
		$g[146].setOpacity(opacity)
	}

	function showZeroForwarding(opacity) {
	}

	function showCPSRForwarding(opacity) {
		$g[152].setOpacity(opacity)
		$g[153].setOpacity(opacity)
		$g[154].setOpacity(opacity)
		$g[155].setOpacity(opacity)
		if (opacity==0) {
			$g[157].setPt(0, -356, 0)
		} else {
			$g[157].setPt(0, 0, 0)
		}
	}

	function showPipeline(opacity) {
		if (opacity==0) {
			$g[97].setPoint(1, 803, 507)
			$g[97].setPoint(2, 803, 529)
			$g[99].setPoint(1, 1186, 860)
			$g[121].setPoint(1, 1001, 452)
			$g[121].setPoint(2, 1126, 452)
			$g[118].setPoint(1, 1209, 551)
			$g[147].setPoint(0, 1159, 551)
			$g[149].setPoint(3, 1570, 507)
			$g[150].setPoint(3, 1570, 507)
			$g[148].setPoint(1, 1695, 727)
			$g[178].setPoint(1, 1939, 507)
			$g[177].setPoint(0, 1570, 507)
			$g[184].setPoint(0, 1848, 507)
			$g[139].setPoint(0, 830, 860)
			$g[139].setPoint(1, 1388, 860)
			$g[99].setHead(0)
			$g[97].setHead(0)
			$g[121].setHead(0)
			$g[133].setHead(0)
			$g[118].setHead(0)
			$g[147].setHead(0)
			$g[148].setHead(0)
			$g[149].setHead(0)
			$g[150].setHead(0)
			$g[178].setHead(0)
			showBTB(opacity)
			showALUForwarding(opacity)
			showSMDRForwarding(opacity)
			showCPSRForwarding(opacity)
		} else {
			$g[97].setPoint(1, 749, 507)
			$g[97].setPoint(2, 776, 507)
			$g[99].setPoint(1, 1082, 860)
			$g[121].setPoint(1, 1001, 463)
			$g[121].setPoint(2, 1082, 463)
			$g[118].setPoint(1, 1082, 551)
			$g[147].setPoint(0, 1136, 529)
			$g[149].setPoint(3, 1570, 507)
			$g[150].setPoint(3, 1570, 507)
			$g[148].setPoint(1, 1587, 712)
			$g[178].setPoint(1, 1848, 507)
			$g[177].setPoint(0, 1700, 507)
			$g[184].setPoint(0, 1978, 507)
			$g[139].setPoint(0, 1186, 860)
			$g[139].setPoint(1, 1388, 860)
			$g[99].setHead(1)
			$g[97].setHead(1)
			$g[121].setHead(1)
			$g[133].setHead(1)
			$g[118].setHead(1)
			$g[147].setHead(1)
			$g[148].setHead(1)
			$g[149].setHead(1)
			$g[150].setHead(1)
			$g[178].setHead(1)
			showBTB($g[28]==BRANCH_PREDICTION ? 1 : 0)
			showALUForwarding($g[30]==ALU_FORWARDING ? 1 : 0)
			showSMDRForwarding($g[31]==FORWARDING_TO_SMDR ? 1 : 0)
			showCPSRForwarding($g[32]==ZERO_FORWARDING ? 1 : 0)
		}
		$g[96].setOpacity(opacity)
		$g[85].setOpacity(opacity)
		$g[93].setOpacity(opacity)
		$g[101].setOpacity(opacity)
		$g[123].setOpacity(opacity)
		$g[166].setOpacity(opacity)
		$g[182].setOpacity(opacity)
		$g[130].setOpacity(opacity)
		$g[176].setOpacity(opacity)
		$g[124].setOpacity(opacity)
		$g[125].setOpacity(opacity)
		$g[167].setOpacity(opacity)
		$g[183].setOpacity(opacity)
		$g[168].setOpacity(opacity)
		$g[67].label.setOpacity(opacity)
		$g[68].label.setOpacity(opacity)
		$g[69].label.setOpacity(opacity)
		$g[70].label.setOpacity(opacity)
		$g[71].label.setOpacity(opacity)
	}

	function setPEMode(mode) {
		$g[27]=mode
		if ($g[27]==0) {
			$g[66].setCaption("Pipelining Enabled")
			showPipeline(1)
		} else
		if ($g[27]==1) {
			$g[66].setCaption("Pipelining Disabled")
			showPipeline(0)
		}
		setArg("peMode", $g[27].toString())
	}

	function setBPMode(mode) {
		$g[28]=mode
		if ($g[28]==0) {
			$g[67].setCaption("Branch Prediction")
			showBTB(1)
		} else
		if ($g[28]==1) {
			$g[67].setCaption("Branch Interlock")
			showBTB(0)
		} else
		if ($g[28]==2) {
			$g[67].setCaption("Delayed Branches")
			showBTB(0)
		}
		setArg("bpMode", $g[28].toString())
	}

	function setLIMode(mode) {
		$g[29]=mode
		if ($g[29]==0) {
			$g[68].setCaption("Load Interlock")
		} else
		if ($g[29]==1) {
			$g[68].setCaption("No Load Interlock")
		}
		setArg("liMode", $g[29].toString())
	}

	function setAFMode(mode) {
		$g[30]=mode
		if ($g[30]==0) {
			$g[69].setCaption("ALU Forwarding")
			showALUForwarding(1)
		} else
		if ($g[30]==1) {
			$g[69].setCaption("ALU Interlock")
			showALUForwarding(0)
		} else
		if ($g[30]==2) {
			$g[69].setCaption("No ALU Interlock")
			showALUForwarding(0)
		}
		setArg("afMode", $g[30].toString())
	}

	function setSFMode(mode) {
		$g[31]=mode
		if ($g[31]==0) {
			$g[70].setCaption("Store Operand\nForwarding")
			showSMDRForwarding(1)
		} else
		if ($g[31]==1) {
			$g[70].setCaption("Store Interlock")
			showSMDRForwarding(0)
		} else
		if ($g[31]==2) {
			$g[70].setCaption("No Store Interlock")
			showSMDRForwarding(0)
		}
		setArg("sfMode", $g[31].toString())
	}

	function setZFMode(mode) {
		$g[32]=mode
		if ($g[32]==0) {
			$g[71].setCaption("CPSR Forwarding")
			showZeroForwarding(1)
		} else
		if ($g[32]==1) {
			$g[71].setCaption("CPSR Interlock")
			showZeroForwarding(0)
		} else
		if ($g[32]==2) {
			$g[71].setCaption("No CPSR Interlock")
			showZeroForwarding(0)
		}
		setArg("zfMode", $g[32].toString())
	}

	function $eh28(enter, x, y) {
		$g[194].setBrush(enter ? $g[9] : $g[13])
	}

	function $eh29(down, flags, x, y) {
		if (down && (flags&MB_LEFT)) {
			setArg("help", "0")
			$g[21].setOpacity(0)
		}
		return 0
	}

	function btbIndex(pc) {
		for (let lp1 = 0; lp1<2; lp1++)
		if ($g[81][lp1].value==pc)
		return lp1
		return -1
	}

	function calcNewPC() {
		if (instrIsBranch($g[100].vIns)) {
			let pen = $g[108]
			$g[201]=$g[91]
			if (testCondition($g[100].vCond)) {
				if ($g[100].vIns==B || $g[100].vIns==BL) {
					$g[200]=($g[101].value+$g[100].vRs2)&127
				}
			} else {
				$g[200]=$g[101].value+4
			}
			$g[201]=$g[91]
		}
	}

	function calcNewPC2() {
		if (instrIsBranch($g[123].vIns)) {
			let pen = $g[108]
			if (testCondition($g[123].vCond)) {
				$g[200]=($g[125].value+$g[123].vRs2)&127
				$g[201]=$g[91]
			} else {
				$g[200]=$g[125].value+4
				$g[201]=$g[90]
			}
		}
	}

	function updBTB() {
		if ($g[200]!=$g[79].value) {
			$g[79].setNewValue($g[200])
			$g[102][15].setNewValue($g[200])
			$g[195]=$g[201]
			if ($g[28]==BRANCH_PREDICTION) {
				if ($g[200]==$g[101].value+4) {
					if (btbIndex($g[101].value)>=0)
					$g[81][btbIndex($g[101].value)].setInvalid(1)
				} else {
					if (btbIndex($g[101].value)>=0)
					$g[25]=btbIndex($g[101].value)
					else 
					$g[25]=($g[25]) ? 0 : 1
					$g[81][$g[25]].setNewValue($g[101].value)
					$g[81][$g[25]].setInvalid(0)
					$g[81][$g[25]].useTag=0
					$g[82][$g[25]].setNewValue($g[200])
				}
			}
		}
	}

	function updBTB2() {
		if ($g[200]!=$g[79].value) {
			$g[79].setNewValue($g[200])
			$g[102][15].setNewValue($g[200])
			$g[195]=$g[201]
			if ($g[28]==BRANCH_PREDICTION) {
				if (btbIndex($g[125].value)>=0)
				$g[25]=btbIndex($g[125].value)
				else 
				$g[25]=($g[25]) ? 0 : 1
				$g[81][$g[25]].setNewValue($g[125].value)
				$g[81][$g[25]].setInvalid(0)
				$g[81][$g[25]].useTag=0
				$g[82][$g[25]].setNewValue($g[200])
			}
		}
	}

	function detectStall() {
		$g[24]=NO_STALL
		$g[26]=0
		if ($g[30]==ALU_INTERLOCK) {
			if (instrOpTypeRdt($g[123].vIns)==OP_TYPE_REG) {
				if ((instrOpTypeRs1($g[100].vIns)==OP_TYPE_REG) && ($g[100].vRs1==$g[123].vRdt))
				$g[24]=DATA_STALL
				if ((instrOpTypeRs2($g[100].vIns)==OP_TYPE_REG) && ($g[100].vRs2==$g[123].vRdt))
				$g[24]=DATA_STALL
			}
			if (instrOpTypeRdt($g[166].vIns)==OP_TYPE_REG) {
				if ((instrOpTypeRs1($g[100].vIns)==OP_TYPE_REG) && ($g[100].vRs1==$g[166].vRdt))
				$g[24]=DATA_STALL
				if ((instrOpTypeRs2($g[100].vIns)==OP_TYPE_REG) && ($g[100].vRs2==$g[166].vRdt))
				$g[24]=DATA_STALL
			}
		}
		if (($g[31]==STORE_INTERLOCK) && ($g[100].vIns==STR || $g[100].vIns==STR)) {
			if ((instrOpTypeRdt($g[123].vIns)==OP_TYPE_REG) && ($g[123].vRdt==$g[100].vRdt))
			$g[24]=DATA_STALL
			if ((instrOpTypeRdt($g[166].vIns)==OP_TYPE_REG) && ($g[166].vRdt==$g[100].vRdt))
			$g[24]=DATA_STALL
		}
		if (($g[29]==LOAD_INTERLOCK) && ($g[123].vIns==LDR || $g[123].vIns==LDRi)) {
			if ((instrOpTypeRs1($g[100].vIns)==OP_TYPE_REG) && ($g[100].vRs1==$g[123].vRdt))
			$g[24]=DATA_STALL
			if ((instrOpTypeRs2($g[100].vIns)==OP_TYPE_REG) && ($g[100].vRs2==$g[123].vRdt))
			$g[24]=DATA_STALL
		}
		if ($g[24]==NO_STALL && $g[202]==0 && ($g[100].vIns==MUL)) {
			let Rm = $g[102][$g[100].vRs1].value
			let Rs = $g[102][$g[100].vRs2].value
			if ((Rm==255 || Rm==0) && (Rs==255 || Rs==0)) {
				$g[202]=0
			} else {
				$g[202]=1
			}
		} else
		if ($g[202]>0) {
			$g[202]--
			$g[24]=MUL_STALL
		}
		if (($g[24]==NO_STALL) && instrIsBranch($g[123].vIns) && ($g[200]!=$g[79].value)) {
			if ($g[28]==BRANCH_PREDICTION) {
				$g[26]=1
			} else
			if ($g[28]==BRANCH_INTERLOCK) {
				$g[24]=CTRL_STALL
			}
		}
		if ($g[24]==DATA_STALL) {
			$g[78].setStall(1, 0)
		} else
		if ($g[24]==CTRL_STALL) {
			$g[78].setStall(1, 1)
		}
	}

	function setlocked() {
		let b_locked = $g[33] || $g[23]
		$g[66].showLocked(b_locked)
		$g[67].showLocked(b_locked)
		$g[68].showLocked(b_locked)
		$g[69].showLocked(b_locked)
		$g[70].showLocked(b_locked)
		$g[71].showLocked(b_locked)
	}

	function $eh30(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[33]) && (!$g[23])) {
			setPEMode(($g[27]+1)%2)
			resetCircuit()
		}
		return 0
	}

	function $eh31(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[33]) && (!$g[23])) {
			setBPMode(($g[28]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh32(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[33]) && (!$g[23])) {
			setLIMode(($g[29]+1)%2)
			resetCircuit()
		}
		return 0
	}

	function $eh33(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[33]) && (!$g[23])) {
			setAFMode(($g[30]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh34(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT) && (!$g[33]) && (!$g[23])) {
			setSFMode(($g[31]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh35(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT) && (!$g[33]) && (!$g[23])) {
			setZFMode(($g[32]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh36(down, flags, x, y) {
		if (down && (flags&MB_LEFT)) {
			let lp1, opcode, reg
			let instr
			let s = "saveanim.php?state="
			for (lp1=0; lp1<32; lp1++) {
				instr=$g[77].instruction[lp1]
				opcode=(instr.vIns<<24)|(instr.vRdt<<16)|(instr.vRs1<<8)|(instr.vRs2)
				s=sprintf("%si%d='0x%08X' ", s, lp1, opcode)
			}
			for (lp1=0; lp1<4; lp1++) {
				reg=$g[102][lp1].value
				s=sprintf("%sr%d='0x%02X' ", s, lp1, reg)
			}
			for (lp1=0; lp1<4; lp1++) {
				reg=$g[171][lp1].value
				s=sprintf("%sm%d='0x%02X' ", s, lp1, reg)
			}
			s=sprintf("%speMode='%d' bpMode='%d' liMode='%d' afMode='%d' sfMode='%d' zfMode='%d'", s, $g[27], $g[28], $g[29], $g[30], $g[31], $g[32])
			getURL(s)
		}
		return 0
	}

	function $eh37(down, flags, x, y) {
		if (down && (flags&MB_LEFT))
		getURL("https://www.scss.tcd.ie/Jeremy.Jones/VivioJS/vivio.htm")
		return 0
	}

	function $eh38(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT))
		getURL("showanim.php")
	}

	function $eh39(enter, x, y) {
		$g[76].setBrush(enter ? $g[8] : $g[12])
		$g[76].setTxtPen(enter ? $g[3] : $g[1])
		return 0
	}

	function $eh40(down, flags, x, y) {
		if (down && (flags&MB_LEFT)) {
			$g[14]=($g[14]==maxexample) ? 0 : $g[14]+1
			setArg("example", $g[14].toString())
			reset()
		}
		return 0
	}

	function execute(thread) {

		switchToThread(thread);

		while (1) {
			switch ($pc) {
			case -1:
				return;		// catch thread termination
			case 0:
				enterf(0);	// started with a function call
				$g[1] = new SolidPen(0, 1, BLACK)
				$g[2] = new SolidPen(0, 0, GRAY64)
				$g[3] = new SolidPen(0, 0, RED)
				$g[4] = new SolidPen(0, 0, WHITE)
				$g[5] = new SolidBrush(BLACK)
				$g[6] = new SolidBrush(GRAY64)
				$g[7] = new SolidBrush(LIGHT_BLUE)
				$g[8] = new SolidBrush(GRAY192)
				$g[9] = new SolidBrush(GRAY224)
				$g[10] = new SolidBrush(MARINE)
				$g[11] = new SolidBrush(RED)
				$g[12] = new SolidBrush(WHITE)
				$g[13] = new SolidBrush(YELLOW)
				$g[14] = 0
				setViewport(0, 0, WIDTH, HEIGHT, 1)
				setBgBrush($g[12])
				$g[15] = new Font("Calibri", 20)
				$g[16] = new Font("Calibri", 22)
				$g[17] = new Font("Calibri", 22, STRIKETHROUGH)
				$g[18] = new Layer(1, 3)
				$g[19] = new Layer(2, 3)
				$g[20] = new Layer(3, 0)
				$g[21] = new Layer(5, 0)
				$g[22] = new SolidBrush(RED)
				$g[23] = 0
				$g[24] = NO_STALL
				$g[25] = 1
				$g[26] = 0
				$g[27] = 0
				$g[28] = 0
				$g[29] = 0
				$g[30] = 0
				$g[31] = 0
				$g[32] = 0
				$g[33] = 0
				$g[34] = 0
				$g[35] = 0
				$g[36] = newArray(MAX_COND+1)
				$g[36][def]="  "
				$g[36][EQ]="EQ"
				$g[36][NE]="NE"
				$g[36][HS]="HS"
				$g[36][CS]="CS"
				$g[36][LO]="LO"
				$g[36][CC]="CC"
				$g[36][MI]="MI"
				$g[36][PL]="PL"
				$g[36][VS]="VS"
				$g[36][VC]="VC"
				$g[36][HI]="HI"
				$g[36][LS]="LS"
				$g[36][GE]="GE"
				$g[36][LT]="LT"
				$g[36][GT]="GT"
				$g[36][LE]="LE"
				$g[36][AL]="AL"
				$g[36][NV]="NV"
				$g[37] = newArray(51)
				$g[37][NOP]="NOP"
				$g[37][ADD]="ADD"
				$g[37][ADC]="ADC"
				$g[37][SUB]="SUB"
				$g[37][SBC]="SBC"
				$g[37][RSB]="RSB"
				$g[37][RSC]="RSC"
				$g[37][MUL]="MUL"
				$g[37][AND]="AND"
				$g[37][ORR]="ORR"
				$g[37][EOR]="EOR"
				$g[37][BIC]="BIC"
				$g[37][LSL]="LSL"
				$g[37][LSR]="LSR"
				$g[37][ASR]="ASR"
				$g[37][ROR]="ROR"
				$g[37][ADDi]="ADD(i)"
				$g[37][ADCi]="ADC(i)"
				$g[37][SUBi]="SUB(i)"
				$g[37][SBCi]="SBC(i)"
				$g[37][RSBi]="RSB(i)"
				$g[37][RSCi]="RSC(i)"
				$g[37][ANDi]="AND(i)"
				$g[37][ORRi]="ORR(i)"
				$g[37][EORi]="EOR(i)"
				$g[37][BICi]="BIC(i)"
				$g[37][LSLi]="LSL(i)"
				$g[37][LSRi]="LSR(i)"
				$g[37][ASRi]="ASR(i)"
				$g[37][RORi]="ROR(i)"
				$g[37][CMN]="CMN"
				$g[37][CMP]="CMP"
				$g[37][TEQ]="TEQ"
				$g[37][TST]="TST"
				$g[37][CMNi]="CMN(i)"
				$g[37][CMPi]="CMP(i)"
				$g[37][TEQi]="TEQ(i)"
				$g[37][TSTi]="TST(i)"
				$g[37][MOV]="MOV"
				$g[37][MVN]="MVN"
				$g[37][LDR]="LDR"
				$g[37][STR]="STR"
				$g[37][MOVi]="MOV(i)"
				$g[37][MVNi]="MVN(i)"
				$g[37][LDRi]="LDR(i)"
				$g[37][STRi]="STR(i)"
				$g[37][B]="B"
				$g[37][BL]="BL"
				$g[37][HALT]="HALT"
				$g[37][STALL]="STALL"
				$g[37][EMPTY]="EMPTY"
				$g[38] = new SolidBrush(BORDEAU)
				$g[39] = new SolidBrush(WHITE)
				$g[40] = new SolidPen(DOT, 1, rgba(0.75, 0.75, 0.75))
				$g[41] = new SolidPen(SOLID, 1, RED, ARROW60_END)
				$g[42] = new SolidBrush(PURPLE)
				$g[43] = new SolidBrush(WHITE)
				$g[44] = new SolidBrush(LIGHT_BLUE)
				$g[45] = new Font("Calibri", 24)
				$g[46] = new SolidPen(SOLID, 1, RED, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[47] = new SolidPen(SOLID, 1, GREEN, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[48] = new SolidPen(SOLID, 1, ORANGE, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[49] = new SolidBrush(WHITE)
				$g[50] = new SolidBrush(GRAY224)
				$g[51] = new SolidBrush(PURPLE)
				$g[52] = new SolidBrush(WHITE)
				$g[53] = $g[45]
				$g[54] = $g[16]
				$g[55] = getArg("name", "")
				if (!($g[55]!="")) {
					$pc = 1
					continue
				}
				$g[55]=sprintf(":  %s", $g[55])
				$pc = 1
			case 1:
				$g[56] = new Font("Calibri", 54, SMALLCAPS|ITALIC)
				$g[57] = new Rectangle2($g[0], 0, HLEFT, 0, new SolidBrush(DARK_BLUE), 27, 27, 911, 66, $g[4], $g[56], sprintf(" ARM9 TDMI Animation %s", $g[55]))
				$g[58] = new SolidPen(DASH, 3, DARK_BLUE, ROUND_START|ROUND_JOIN|ROUND_END)
				new Line2($g[0], 0, ABSOLUTE, $g[58], 437, 176, 1993, 176)
				new Line2($g[0], 0, ABSOLUTE, $g[58], 437, 1000, 1993, 1000)
				new Line2($g[0], 0, ABSOLUTE, $g[58], 437, 176, 437, 1000)
				$g[59] = new Line2($g[0], 0, ABSOLUTE, $g[58], 749, 176, 749, 1000)
				$g[60] = new Line2($g[0], 0, ABSOLUTE, $g[58], 1050, 176, 1050, 1000)
				$g[61] = new Line2($g[0], 0, ABSOLUTE, $g[58], 1535, 176, 1535, 1000)
				$g[62] = new Line2($g[0], 0, ABSOLUTE, $g[58], 1825, 176, 1825, 1000)
				new Line2($g[0], 0, ABSOLUTE, $g[58], 1997, 176, 1997, 1000)
				$g[63] = new SolidPen(DOT, THIN, BLACK)
				new Line2($g[0], 0, ABSOLUTE, $g[63], 27, 1008, 2190, 1008)
				$g[64] = new Font("Calibri", 27, BOLD)
				$g[65] = new Button(134, 1014, 216, 54, "Save Configuration", BUTTON_SP)
				$g[66] = new Button(505, 1014, 216, 44, "Pipelining Enabled", BUTTON_PE)
				$g[67] = new Button(748, 1014, 216, 44, "Branch Prediction", BUTTON_BP)
				$g[68] = new Button(991, 1014, 216, 44, "Load Interlock", BUTTON_LI)
				$g[69] = new Button(1235, 1014, 216, 44, "ALU Forwarding", BUTTON_AF)
				$g[70] = new Button(1478, 1014, 216, 44, "Store Operand\nForwarding", BUTTON_SF)
				$g[71] = new Button(1721, 1014, 216, 44, "CPSR Forwarding", BUTTON_ZF)
				$g[72] = new Image($g[0], 0, 0, 0, "vivio.png", 2146, 1014, 0, 0, LOGOW, LOGOH)
				new Txt($g[0], 0, HLEFT|VTOP, 27, 101, $g[2], $g[16], "instructions executed:")
				$g[73] = new Txt($g[0], 0, HLEFT|VTOP, 27, 123, $g[2], $g[16], "ticks:")
				$g[74] = new Txt($g[0], 0, HLEFT|VTOP, 243, 101, $g[3], $g[16], "0")
				$g[75] = new Txt($g[0], 0, HLEFT|VTOP, 243, 123, $g[3], $g[16], "0")
				$g[76] = new Rectangle2($g[0], 0, 0, 0, 0, 27, 150, 270, 27, 0, $g[16], "Instruction Cache")
				$g[77] = new InstructionMemory(27, 190, 390, 715)
				$g[78] = new AnimatedClock($g[0], 54, 914, 216, 66)
				$g[79] = new Register(641, 463, 54, 88, TOP, "PC")
				$g[80] = new Rectangle2($g[0], 0, 0, 0, 0, 506, 187, 216, 22, 0, $g[16], "Branch Target Buffer")
				$g[81] = newArray(2)
				$g[81][0]=new Register(506, 220, 108, 44, LEFT, "PC")
				$g[81][1]=new Register(506, 264, 108, 44, LEFT, "PC")
				$g[82] = newArray(2)
				$g[82][0]=new Register(614, 220, 108, 44, RIGHT, "PPC")
				$g[82][1]=new Register(614, 264, 108, 44, RIGHT, "PPC")
				$g[83] = new Component(641, 375, 81, 22, "mux 2")
				$g[84] = new Component(560, 452, 27, 110, "mux 1")
				$g[85] = new Component(533, 595, 54, 22, "+4")
				$g[86] = new Component(533, 639, 54, 22, "+4")
				$g[87] = new AnimPipe()
				$g[87].addPoint(415, 860)
				$g[87].addPoint(776, 860)
				$g[88] = new Rectangle($g[0], $g[20], 0, 0, $g[11], 587, 8130, -81, -13, 130, 26, $g[4], $g[16])
				$g[88].setRounded(2, 2)
				$g[89] = new AnimPipe()
				$g[89].addPoint(668, 551)
				$g[89].addPoint(668, 705)
				$g[89].addPoint(415, 705)
				$g[90] = new AnimPipe()
				$g[90].addPoint(1109, 595)
				$g[90].addPoint(1109, 650)
				$g[90].addPoint(479, 650)
				$g[90].addPoint(479, 518)
				$g[90].addPoint(560, 518)
				$g[91] = new AnimPipe()
				$g[91].addPoint(1180, 305)
				$g[91].addPoint(1180, 287)
				$g[91].addPoint(911, 287)
				$g[91].addPoint(911, 353)
				$g[91].addPoint(506, 353)
				$g[91].addPoint(506, 474)
				$g[91].addPoint(560, 474)
				$g[92] = new AnimPipe()
				$g[92].addPoint(506, 264)
				$g[92].addPoint(479, 264)
				$g[92].addPoint(479, 496)
				$g[92].addPoint(560, 496)
				$g[93] = new AnimPipe()
				$g[93].addPoint(533, 606)
				$g[93].addPoint(506, 606)
				$g[93].addPoint(506, 540)
				$g[93].addPoint(560, 540)
				$g[94] = new AnimPipe()
				$g[94].addPoint(587, 507)
				$g[94].addPoint(641, 507)
				$g[95] = new AnimPipe()
				$g[95].addPoint(668, 462)
				$g[95].addPoint(668, 397)
				$g[96] = new AnimPipe()
				$g[96].addPoint(668, 551)
				$g[96].addPoint(668, 606)
				$g[96].addPoint(587, 606)
				$g[97] = new AnimPipe()
				$g[97].addPoint(695, 507)
				$g[97].addPoint(749, 507)
				$g[97].addPoint(776, 507)
				$g[98] = new AnimPipe()
				$g[98].addPoint(681, 375)
				$g[98].addPoint(681, 309)
				$g[99] = new AnimPipe()
				$g[99].addPoint(830, 860)
				$g[99].addPoint(1082, 860)
				$g[100] = new InstructionRegister(776, 745, 54, 250, "ID")
				$g[101] = new Register(776, 463, 54, 88, TOP, "PC1")
				new Txt($g[0], 0, HLEFT|VTOP, 1182, 88, 0, $g[16], "Register\nFile")
				$g[102] = newArray(16)
				$g[102][0]=new Register(952, 66, 32, 88, TOP, "R0")
				$g[102][1]=new Register(984, 66, 32, 88, TOP, "R1")
				$g[102][2]=new Register(1016, 66, 32, 88, TOP, "R2")
				$g[102][3]=new Register(1048, 66, 32, 88, TOP, "R3")
				$g[102][4]=new Register(1080, 66, 32, 88, TOP, "R4")
				$g[102][5]=new Register(1112, 66, 32, 88, TOP, "R5")
				$g[102][6]=new Register(1144, 66, 32, 88, TOP, "R6")
				$g[102][7]=new Register(1176, 66, 32, 88, TOP, "R7")
				$g[102][8]=new Register(1208, 66, 32, 88, TOP, "R8")
				$g[102][9]=new Register(1240, 66, 32, 88, TOP, "R9")
				$g[102][10]=new Register(1272, 66, 32, 88, TOP, "R10")
				$g[102][11]=new Register(1304, 66, 32, 88, TOP, "R11")
				$g[102][12]=new Register(1336, 66, 32, 88, TOP, "R12")
				$g[102][13]=new Register(1368, 66, 32, 88, TOP, "SP")
				$g[102][14]=new Register(1400, 66, 32, 88, TOP, "LR")
				$g[102][15]=new Register(1432, 66, 32, 88, TOP, "PC")
				$g[102][13].setValue(64)
				$g[102][15].setValue(124)
				$g[103] = new CPSR(1490, 66, 140, 88, 0)
				$g[104] = new Component(1140, 305, 81, 22, "ADDi")
				$g[105] = new Component(776, 220, 27, 88, "mux 4")
				$g[106] = new Component(1001, 518, 27, 66, "mux 5")
				$g[107] = new SolidPen(SOLID, 2, PURPLE, ARROW60_END)
				$g[108] = new SolidPen(SOLID, 5, RED, ARROW60_END)
				$g[109] = new SolidPen(SOLID, 8, GRAY192)
				$g[110] = new SolidPen(SOLID, 8, RED)
				$g[111] = new SolidPen(SOLID, THICK, BLACK)
				$g[112] = new AnimPipe()
				$g[112].addPoint(803, 463)
				$g[112].addPoint(803, 441)
				$g[112].addPoint(695, 441)
				$g[112].addPoint(695, 397)
				$g[113] = new AnimPipe()
				$g[113].addPoint(803, 551)
				$g[113].addPoint(803, 565)
				$g[113].addPoint(1001, 565)
				$g[114] = new AnimPipe()
				$g[114].addPoint(1180, 305)
				$g[114].addPoint(1180, 287)
				$g[114].addPoint(803, 287)
				$g[115] = new AnimPipe()
				$g[115].addPoint(776, 264)
				$g[115].addPoint(722, 264)
				$g[116] = new AnimPipe()
				$g[116].addPoint(952, 110)
				$g[116].addPoint(911, 110)
				$g[116].addPoint(911, 242)
				$g[116].addPoint(803, 242)
				$g[117] = new Rectangle($g[0], $g[20], 0, 0, $g[11], 911, 97, -32, 0, 65, 32, $g[4], $g[16])
				$g[118] = new AnimPipe()
				$g[118].addPoint(1028, 551)
				$g[118].addPoint(1082, 551)
				$g[119] = new AnimPipe()
				$g[119].addPoint(965, 154)
				$g[119].addPoint(965, 540)
				$g[119].addPoint(1001, 540)
				$g[120] = new Rectangle($g[0], $g[20], 0, 0, $g[11], 955, 181, -32, 0, 65, 32, $g[4], $g[16], "R0:0")
				$g[120].setRounded(2, 2)
				$g[121] = new AnimPipe()
				$g[121].addPoint(1001, 154)
				$g[121].addPoint(1001, 463)
				$g[121].addPoint(1032, 463)
				$g[122] = new Rectangle($g[0], $g[20], 0, 0, $g[11], 1015, 181, -32, 0, 65, 32, $g[4], $g[16], "R0:0")
				$g[122].setRounded(2, 2)
				$g[123] = new InstructionRegister(1082, 745, 54, 250, "EX")
				$g[124] = new Register(1082, 419, 54, 88, TOP, "A")
				$g[125] = new Register(1082, 507, 54, 88, BOTTOM, "B")
				$g[126] = new Component(1301, 397, 27, 110, "mux 6")
				$g[127] = new Component(1301, 507, 27, 110, "mux 7")
				$g[128] = new Component(1301, 675, 27, 74, "mux 8")
				$g[129] = new ALU(1445, 419, 69, 176)
				$g[130] = new AnimPipe()
				$g[130].addPoint(1136, 860)
				$g[130].addPoint(1614, 860)
				$g[131] = new AnimPipe()
				$g[131].addPoint(1614, 480)
				$g[131].addPoint(1614, 375)
				$g[131].addPoint(1267, 375)
				$g[131].addPoint(1267, 419)
				$g[131].addPoint(1301, 419)
				$g[132] = new AnimPipe()
				$g[132].addPoint(1896, 480)
				$g[132].addPoint(1896, 353)
				$g[132].addPoint(1240, 353)
				$g[132].addPoint(1240, 441)
				$g[132].addPoint(1301, 441)
				$g[133] = new AnimPipe()
				$g[133].addPoint(1136, 485)
				$g[133].addPoint(1301, 485)
				$g[134] = new AnimPipe()
				$g[134].addPoint(1136, 529)
				$g[134].addPoint(1159, 529)
				$g[134].addPoint(1159, 327)
				$g[135] = new AnimPipe()
				$g[135].addPoint(1136, 860)
				$g[135].addPoint(1208, 860)
				$g[135].addPoint(1208, 327)
				$g[136] = new AnimPipe()
				$g[136].addPoint(1136, 529)
				$g[136].addPoint(1301, 529)
				$g[137] = new AnimPipe()
				$g[137].addPoint(1136, 860)
				$g[137].addPoint(1208, 860)
				$g[137].addPoint(1208, 551)
				$g[137].addPoint(1371, 551)
				$g[138] = new Rectangle($g[0], $g[20], 0, 0, $g[11], 1268, 816, -27, 0, 54, 26, $g[4], $g[16], "IMM")
				$g[138].setRounded(2, 2)
				$g[139] = new AnimPipe()
				$g[139].addPoint(1136, 860)
				$g[139].addPoint(1388, 860)
				$g[139].addPoint(1388, 607)
				$g[140] = new Rectangle($g[0], $g[20], 0, 0, $g[11], 1388, 816, -27, 0, 54, 26, $g[4], $g[16], "IMM")
				$g[140].setRounded(2, 2)
				$g[141] = new AnimPipe()
				$g[141].addPoint(1388, 154)
				$g[141].addPoint(1388, 517)
				$g[142] = new Rectangle($g[0], $g[20], 0, 0, $g[11], 1388, 181, -32, 0, 65, 32, $g[4], $g[16], "R0:0")
				$g[142].setRounded(2, 2)
				$g[143] = new AnimPipe()
				$g[143].addPoint(1896, 534)
				$g[143].addPoint(1896, 661)
				$g[143].addPoint(1240, 661)
				$g[143].addPoint(1240, 573)
				$g[143].addPoint(1301, 573)
				$g[144] = new AnimPipe()
				$g[144].addPoint(1614, 534)
				$g[144].addPoint(1614, 639)
				$g[144].addPoint(1267, 639)
				$g[144].addPoint(1267, 595)
				$g[144].addPoint(1301, 595)
				$g[145] = new AnimPipe()
				$g[145].addPoint(1614, 534)
				$g[145].addPoint(1614, 639)
				$g[145].addPoint(1267, 639)
				$g[145].addPoint(1267, 690)
				$g[145].addPoint(1301, 690)
				$g[146] = new AnimPipe()
				$g[146].addPoint(1896, 534)
				$g[146].addPoint(1896, 661)
				$g[146].addPoint(1240, 661)
				$g[146].addPoint(1240, 712)
				$g[146].addPoint(1301, 712)
				$g[147] = new AnimPipe()
				$g[147].addPoint(1136, 529)
				$g[147].addPoint(1159, 529)
				$g[147].addPoint(1159, 734)
				$g[147].addPoint(1301, 734)
				$g[148] = new AnimPipe()
				$g[148].addPoint(1328, 712)
				$g[148].addPoint(1657, 712)
				$g[149] = new AnimPipe()
				$g[149].addPoint(1328, 452)
				$g[149].addPoint(1445, 452)
				$g[149].addPoint(1530, 507)
				$g[149].addPoint(1570, 507)
				$g[150] = new AnimPipe()
				$g[150].addPoint(1328, 562)
				$g[150].addPoint(1445, 562)
				$g[150].addPoint(1530, 507)
				$g[150].addPoint(1570, 507)
				$g[151] = new Component(1361, 517, 55, 90, "Barrel\nShifter")
				$g[152] = new CPSR(1660, 477, 40, 60, 1)
				$g[153] = new CPSR(1938, 477, 40, 60, 1)
				$g[154] = new Line2($g[0], $g[20], ABSOLUTE, $g[107], 1680, 477, 1680, 450, 1545, 450, 1545, 480)
				$g[155] = new Line2($g[0], $g[20], ABSOLUTE, $g[107], 1958, 477, 1958, 420, 1545, 420, 1545, 480)
				$g[156] = new Line2($g[0], $g[20], ABSOLUTE, $g[107], 1545, 154, 1545, 480)
				$g[157] = new Line2($g[0], $g[20], ABSOLUTE, $g[107], 1136, 820, 1545, 820, 1545, 480)
				$g[158] = new Line2($g[0], $g[20], ABSOLUTE, $g[107], 1680, 477, 1680, 316, 1221, 316)
				$g[159] = new Line2($g[0], $g[20], ABSOLUTE, $g[107], 1958, 477, 1958, 316, 1221, 316)
				$g[160] = new Line2($g[0], $g[20], ABSOLUTE, $g[107], 1545, 154, 1545, 316, 1221, 316)
				$g[161] = new Line2($g[0], $g[20], ABSOLUTE, $g[107], 1136, 820, 1225, 820, 1225, 316)
				$g[162] = new Line2($g[0], $g[20], ABSOLUTE, $g[107], 1545, 480, 1545, 533)
				$g[163] = new Txt($g[0], $g[18], HLEFT|VTOP, 1550, 620, 0, $g[15], "Condition\nCheck")
				$g[163].rotate(-90)
				$g[164] = new Line2($g[0], $g[20], ABSOLUTE, $g[107], 1225, 305, 1225, 325, 1230, 305, 1230, 325)
				$g[165] = new Txt($g[0], $g[18], HLEFT|VTOP, 1230, 260, 0, $g[15], "Condition\nCheck")
				$g[166] = new InstructionRegister(1614, 745, 54, 250, "MA")
				$g[167] = new Register(1570, 480, 88, 54, LEFT, "O0")
				$g[168] = new Register(1587, 690, 108, 44, RIGHT, "SMR")
				$g[169] = new Txt($g[0], $g[18], HLEFT|VTOP, 1660, 290, 0, $g[15], "memory\naddress")
				$g[169].rotate(-90)
				new Txt($g[0], $g[18], HLEFT|VTOP, 1750, 705, 0, $g[15], "memory\ndata-in")
				$g[170] = new Txt($g[0], $g[18], HLEFT|VTOP, 1810, 220, 0, $g[15], "memory\ndata-out")
				$g[170].rotate(90)
				new Txt($g[0], 0, HLEFT|VTOP, 1695, 32, 0, $g[15], "Data Cache (memory)")
				$g[171] = newArray(16)
				$g[171][0]=new Register(1654, 58, 70, 25, LEFT, "00")
				$g[171][1]=new Register(1654, 83, 70, 25, LEFT, "04")
				$g[171][2]=new Register(1654, 108, 70, 25, LEFT, "08")
				$g[171][3]=new Register(1654, 133, 70, 25, LEFT, "0C")
				$g[171][4]=new Register(1724, 58, 70, 25, LEFT, "10")
				$g[171][5]=new Register(1724, 83, 70, 25, LEFT, "14")
				$g[171][6]=new Register(1724, 108, 70, 25, LEFT, "18")
				$g[171][7]=new Register(1724, 133, 70, 25, LEFT, "1C")
				$g[171][8]=new Register(1794, 58, 70, 25, LEFT, "20")
				$g[171][9]=new Register(1794, 83, 70, 25, LEFT, "24")
				$g[171][10]=new Register(1794, 108, 70, 25, LEFT, "28")
				$g[171][11]=new Register(1794, 133, 70, 25, LEFT, "2C")
				$g[171][12]=new Register(1864, 58, 70, 25, LEFT, "30")
				$g[171][13]=new Register(1864, 83, 70, 25, LEFT, "34")
				$g[171][14]=new Register(1864, 108, 70, 25, LEFT, "38")
				$g[171][15]=new Register(1864, 133, 70, 25, LEFT, "3C")
				$g[171][0].rotateText(90)
				$g[171][1].rotateText(90)
				$g[171][2].rotateText(90)
				$g[171][3].rotateText(90)
				$g[171][4].rotateText(90)
				$g[171][5].rotateText(90)
				$g[171][6].rotateText(90)
				$g[171][7].rotateText(90)
				$g[171][8].rotateText(90)
				$g[171][9].rotateText(90)
				$g[171][10].rotateText(90)
				$g[171][11].rotateText(90)
				$g[171][12].rotateText(90)
				$g[171][13].rotateText(90)
				$g[171][14].rotateText(90)
				$g[171][15].rotateText(90)
				$g[172] = new Rectangle2($g[0], 0, 0, $g[1], 0, 2010, 500, 180, 500)
				$g[172].setRounded(2, 2)
				new Txt($g[0], 0, HLEFT|VTOP, 2015, 517, 0, $g[16], "Stack Visualisation")
				$g[173] = newArray(8)
				$g[173][7]=new Register(2055, 585, 100, 50, LEFT, "3C")
				$g[173][6]=new Register(2055, 635, 100, 50, LEFT, "38")
				$g[173][5]=new Register(2055, 685, 100, 50, LEFT, "34")
				$g[173][4]=new Register(2055, 735, 100, 50, LEFT, "30")
				$g[173][3]=new Register(2055, 785, 100, 50, LEFT, "2C")
				$g[173][2]=new Register(2055, 835, 100, 50, LEFT, "28")
				$g[173][1]=new Register(2055, 885, 100, 50, LEFT, "24")
				$g[173][0]=new Register(2055, 935, 100, 50, LEFT, "20")
				$g[173][0].rotateText(90)
				$g[173][1].rotateText(90)
				$g[173][2].rotateText(90)
				$g[173][3].rotateText(90)
				$g[173][4].rotateText(90)
				$g[173][5].rotateText(90)
				$g[173][6].rotateText(90)
				$g[173][7].rotateText(90)
				$g[174] = new StackPointer(2020, 615, 2050, 615, 12, 50)
				$g[175] = new Component(1782, 463, 27, 88, "mux 9")
				$g[176] = new AnimPipe()
				$g[176].addPoint(1668, 860)
				$g[176].addPoint(1885, 860)
				$g[177] = new AnimPipe()
				$g[177].addPoint(1700, 507)
				$g[177].addPoint(1782, 507)
				$g[178] = new AnimPipe()
				$g[178].addPoint(1809, 507)
				$g[178].addPoint(1856, 507)
				$g[179] = new AnimPipe()
				$g[179].addPoint(1700, 507)
				$g[179].addPoint(1715, 507)
				$g[179].addPoint(1715, 158)
				$g[180] = new AnimPipe()
				$g[180].addPoint(1695, 727)
				$g[180].addPoint(1737, 727)
				$g[180].addPoint(1737, 158)
				$g[181] = new AnimPipe()
				$g[181].addPoint(1760, 158)
				$g[181].addPoint(1760, 485)
				$g[181].addPoint(1782, 485)
				$g[182] = new InstructionRegister(1885, 745, 54, 250, "WB")
				$g[183] = new Register(1848, 480, 88, 54, LEFT, "O1")
				$g[184] = new AnimPipe()
				$g[184].addPoint(1978, 507)
				$g[184].addPoint(1987, 507)
				$g[184].addPoint(1987, 22)
				$g[184].addPoint(1207, 22)
				$g[184].addPoint(1207, 66)
				$g[185] = new AnimPipe()
				$g[185].addPoint(1978, 507)
				$g[185].addPoint(1987, 507)
				$g[185].addPoint(1987, 22)
				$g[185].addPoint(1560, 22)
				$g[185].addPoint(1560, 66)
				$g[129].txtResult.moveToFront()
				resetCircuit()
				$g[188] = ""
				$g[186]=0
				$pc = 2
			case 2:
				if (!($g[186]<32)) {
					$pc = 4
					continue
				}
				$g[77].setOpcode(4*$g[186], 0)
				$pc = 3
			case 3:
				$g[186]++
				$pc = 2
				continue
			case 4:
				$g[186]=0
				$pc = 5
			case 5:
				if (!($g[186]<4)) {
					$pc = 7
					continue
				}
				$g[188]=sprintf("r%d", $g[186])
				$g[102][$g[186]].setValue(getArgAsNum($g[188], 0))
				$pc = 6
			case 6:
				$g[186]++
				$pc = 5
				continue
			case 7:
				$g[186]=0
				$pc = 8
			case 8:
				if (!($g[186]<4)) {
					$pc = 10
					continue
				}
				$g[188]=sprintf("m%d", $g[186])
				$g[171][$g[186]].setValue(getArgAsNum($g[188], 0))
				$pc = 9
			case 9:
				$g[186]++
				$pc = 8
				continue
			case 10:
				setTPS(20)
				$g[14]=getArgAsNum("example", 0)
				if (!($g[14]==0)) {
					$pc = 14
					continue
				}
				$g[186]=0
				$pc = 11
			case 11:
				if (!($g[186]<32)) {
					$pc = 13
					continue
				}
				$g[188]=sprintf("i%d", $g[186])
				$g[77].setOpcode(4*$g[186], getArgAsNum($g[188], 0))
				$pc = 12
			case 12:
				$g[186]++
				$pc = 11
				continue
			case 13:
				$pc = 26
				continue
			case 14:
				if (!($g[14]==1)) {
					$pc = 15
					continue
				}
				$g[77].setValue(0, ADD, " ", 0, 1, 3, 4, 0, 0)
				$g[77].setValue(4, SUB, " ", 0, 3, 1, 6, 0, 0)
				$g[77].setValue(8, ADC, " ", 0, 5, 1, 4, 0, 0)
				$g[77].setValue(12, AND, " ", 0, 6, 1, 9, 0, 0)
				$g[77].setValue(16, HALT, " ", 0, 0, 0, 0, 0, 0)
				$g[102][3].setValue(3)
				$g[102][4].setValue(4)
				$g[102][6].setValue(6)
				$g[102][9].setValue(9)
				$pc = 25
				continue
			case 15:
				if (!($g[14]==2)) {
					$pc = 16
					continue
				}
				$g[77].setValue(0, LDRi, " ", 0, 1, 3, 0, 0, 0)
				$g[77].setValue(4, SUB, " ", 0, 3, 1, 6, 0, 0)
				$g[77].setValue(8, ADC, " ", 0, 5, 9, 4, 0, 0)
				$g[77].setValue(12, HALT, " ", 0, 0, 0, 0, 0, 0)
				$g[102][3].setValue(12)
				$g[102][4].setValue(4)
				$g[102][6].setValue(6)
				$g[102][9].setValue(9)
				$pc = 24
				continue
			case 16:
				if (!($g[14]==3)) {
					$pc = 17
					continue
				}
				$g[77].setValue(0, LDRi, " ", 0, 1, 3, 0, 0, 0)
				$g[77].setValue(4, ADC, " ", 0, 5, 9, 4, 0, 0)
				$g[77].setValue(8, SUB, " ", 0, 3, 1, 6, 0, 0)
				$g[77].setValue(12, HALT, " ", 0, 0, 0, 0, 0, 0)
				$g[102][3].setValue(12)
				$g[102][4].setValue(4)
				$g[102][6].setValue(6)
				$g[102][9].setValue(9)
				$pc = 23
				continue
			case 17:
				if (!($g[14]==4)) {
					$pc = 18
					continue
				}
				$g[77].setValue(0, MOVi, " ", 0, 1, 0, 4, 0, 0)
				$g[77].setValue(4, SUB, " ", 0, 3, 1, 6, 0, 0)
				$g[77].setValue(8, ADC, " ", 0, 5, 1, 4, 0, 0)
				$g[77].setValue(12, B, " ", 0, 0, 244, 0, 0, 0)
				$g[77].setValue(16, HALT, " ", 0, 0, 0, 0, 0, 0)
				$g[102][3].setValue(3)
				$g[102][4].setValue(4)
				$g[102][6].setValue(6)
				$g[102][7].setValue(7)
				$g[102][9].setValue(9)
				$pc = 22
				continue
			case 18:
				if (!($g[14]==5)) {
					$pc = 19
					continue
				}
				$g[77].setValue(0, ADD, " ", 0, 0, 0, 1, 0, 0)
				$g[77].setValue(4, B, " ", CS, 0, 0, 16, 0, 0)
				$g[77].setValue(8, SUB, " ", 0, 0, 0, 1, 0, 0)
				$g[77].setValue(12, SBC, " ", 0, 0, 0, 1, 0, 0)
				$g[77].setValue(16, RSB, " ", 0, 0, 0, 1, 0, 0)
				$g[77].setValue(20, ADD, "S", 0, 0, 0, 0, 0, 0)
				$g[77].setValue(24, B, " ", 0, 0, 0, 232, 0, 0)
				$pc = 21
				continue
			case 19:
				if (!($g[14]==6)) {
					$pc = 20
					continue
				}
				$g[77].setValue(0, MOV, " ", 0, 0, 0, 1, 0, 0)
				$g[77].setValue(4, CMPi, " ", 0, 0, 1, 1, 0, 0)
				$g[77].setValue(8, B, " ", LE, 0, 0, 24, 0, 0)
				$g[77].setValue(12, SUBi, " ", 0, 1, 1, 1, 0, 0)
				$g[77].setValue(16, MUL, " ", 0, 0, 1, 1, 0, 0)
				$g[77].setValue(20, B, " ", 0, 0, 0, 240, 0, 0)
				$g[77].setValue(24, HALT, " ", 0, 0, 1, 1, 0, 0)
				$pc = 20
			case 20:
				$pc = 21
			case 21:
				$pc = 22
			case 22:
				$pc = 23
			case 23:
				$pc = 24
			case 24:
				$pc = 25
			case 25:
				$pc = 26
			case 26:
				if (!($g[14]>0)) {
					$pc = 30
					continue
				}
				$g[186]=0
				$pc = 27
			case 27:
				if (!($g[186]<32)) {
					$pc = 29
					continue
				}
				$g[188]=sprintf("i%d", $g[186])
				setArg($g[188], $g[77].getOpcode($g[186]*4).toString())
				$pc = 28
			case 28:
				$g[186]++
				$pc = 27
				continue
			case 29:
				$g[14]=($g[14]>maxexample) ? 0 : $g[14]
				$pc = 30
			case 30:
				$g[189] = getArgAsNum("haltOnHalt", 1)
				$g[28]=getArgAsNum("bpMode", 0)
				setBPMode($g[28])
				$g[29]=getArgAsNum("liMode", 0)
				setLIMode($g[29])
				$g[30]=getArgAsNum("afMode", 0)
				setAFMode($g[30])
				$g[31]=getArgAsNum("sfMode", 0)
				setSFMode($g[31])
				$g[32]=getArgAsNum("zfMode", 0)
				setZFMode($g[32])
				$g[27]=getArgAsNum("peMode", 0)
				setPEMode($g[27])
				$g[23]=getArgAsNum("locked", 0)
				$g[190] = getArgAsNum("help", 1)
				$g[191] = new Rectangle2($g[0], $g[21], 0, 0, $g[12], 0, 0, WIDTH, HEIGHT)
				$g[191].setOpacity(0.5)
				$g[191].setRounded(10, 10)
				$g[192] = new SolidPen(SOLID, 5, RED, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[193] = new Font("Arial", 32, BOLD)
				new Txt($g[0], $g[21], HLEFT|VTOP, 587, 639, $g[192], $g[193], "LEFT CLICK on animation background to start and stop clock.\n\nSHIFT LEFT CLICK on background to execute \"single MIPS clock cycle\".")
				if (!(!$g[23])) {
					$pc = 31
					continue
				}
				$g[191]=new Rectangle2($g[0], $g[21], 0, $g[192], 0, 72, 152, 176, 25)
				$g[191].setRounded(5, 5)
				$g[191]=new Rectangle2($g[0], $g[21], 0, $g[192], 0, 55, 424, 66, 20)
				$g[191].setRounded(5, 5)
				$g[191]=new Rectangle2($g[0], $g[21], 0, $g[192], 0, 206, 424, 31, 20)
				$g[191].setRounded(5, 5)
				$g[191]=new Rectangle2($g[0], $g[21], 0, $g[192], 0, 243, 424, 31, 20)
				$g[191].setRounded(5, 5)
				$g[191]=new Rectangle2($g[0], $g[21], 0, $g[192], 0, 280, 424, 31, 20)
				$g[191].setRounded(5, 5)
				$g[191]=new Rectangle2($g[0], $g[21], 0, $g[192], 0, 317, 424, 40, 20)
				$g[191].setRounded(5, 5)
				$g[191]=new Rectangle2($g[0], $g[21], 0, $g[192], 0, 382, 424, 31, 20)
				$g[191].setRounded(5, 5)
				new Txt($g[0], $g[21], HLEFT|VTOP, 260, 135, $g[192], $g[193], "LEFT CLICK to change\ninitial program.")
				new Txt($g[0], $g[21], HLEFT|VTOP, 425, 401, $g[192], $g[193], "LEFT or RIGHT CLICK to \"rotate\"\ninstructions and operands.\nHold and release to reset value.")
				$pc = 31
			case 31:
				$g[191]=new Rectangle2($g[0], $g[21], 0, $g[192], 0, 983, 90, 32, 64)
				$g[191].setRounded(10, 10)
				new Txt($g[0], $g[21], HLEFT|VTOP, 1025, 88, $g[192], $g[193], "LEFT or RIGHT CLICK register\nto increment or decrement value.")
				if (!(!$g[23])) {
					$pc = 32
					continue
				}
				$g[191]=new Rectangle2($g[0], $g[21], 0, $g[192], 0, 242, 1330, 1212, 30)
				$g[191].setRounded(10, 10)
				new Txt($g[0], $g[21], HLEFT|VTOP, 587, 959, $g[192], $g[193], "LEFT CLICK on any of the buttons below to change circuit configuration.")
				$pc = 32
			case 32:
				$g[194] = new Rectangle2($g[0], $g[21], 0, $g[192], $g[13], 925, 507, 270, 66, $g[192], $g[193], "CLOSE HELP")
				$g[194].setRounded(5, 5)
				$g[194].addEventHandler("eventEE", this, $eh28)
				$g[194].addEventHandler("eventMB", this, $eh29)
				if (!($g[190]==0)) {
					$pc = 33
					continue
				}
				$g[21].setOpacity(0)
				$pc = 33
			case 33:
				$g[198] = 0
				$g[202] = 0
				$g[66].label.addEventHandler("eventMB", this, $eh30)
				$g[67].label.addEventHandler("eventMB", this, $eh31)
				$g[68].label.addEventHandler("eventMB", this, $eh32)
				$g[69].label.addEventHandler("eventMB", this, $eh33)
				$g[70].label.addEventHandler("eventMB", this, $eh34)
				$g[71].label.addEventHandler("eventMB", this, $eh35)
				$g[65].label.addEventHandler("eventMB", this, $eh36)
				$g[72].addEventHandler("eventMB", this, $eh37)
				$g[57].addEventHandler("eventMB", this, $eh38)
				$g[76].addEventHandler("eventEE", this, $eh39)
				$g[76].addEventHandler("eventMB", this, $eh40)
				callf(331, $obj)
				continue
			case 34:
				returnf(0)
				continue
			case 35:
				enterf(0);	// update
				$obj.vIns=$obj.nIns
				$obj.vSBit=$obj.nSBit
				$obj.vCond=$obj.nCond
				$obj.vRdt=$obj.nRdt
				$obj.vRs1=$obj.nRs1
				$obj.vRs2=$obj.nRs2
				$obj.vIns2=$obj.nIns2
				$obj.vRs3=$obj.nRs3
				$obj.txt=instrText($obj.vIns, $obj.vSBit, $obj.vCond, $obj.vRdt, $obj.vRs1, $obj.vRs2, $obj.nIns2, $obj.nRs3)
				$obj.label.setTxt($obj.txt)
				$obj.r2.setBrush($g[13])
				if (wait(16))
				return
				$pc = 36
			case 36:
				$obj.r2.setBrush($g[12])
				returnf(0)
				continue
			case 37:
				enterf(0);	// update
				$obj.value=$obj.newValue
				$obj.tag=$obj.newTag
				$obj.updateLabel()
				$obj.bg1.setBrush($g[13])
				$obj.bg2.setBrush($g[13])
				if (wait(16))
				return
				$pc = 38
			case 38:
				$obj.bg1.setBrush($g[12])
				$obj.bg2.setBrush($g[12])
				returnf(0)
				continue
			case 39:
				enterf(0);	// doubleUpdate
				callf(37, $obj)
				continue
			case 40:
				$stack[$fp-3].value=$obj.newValue
				$stack[$fp-3].tag=$obj.newTag
				$stack[$fp-3].updateLabel()
				$stack[$fp-3].bg1.setBrush($g[13])
				$stack[$fp-3].bg2.setBrush($g[13])
				$stack[$fp-3].bg1.setBrush($g[12])
				$stack[$fp-3].bg2.setBrush($g[12])
				returnf(1)
				continue
			case 41:
				enterf(5);	// animate
				$stack[$fp+1] = 0, $stack[$fp+3] = 0
				$stack[$fp+4] = 0
				$obj.calcLength()
				$obj.fgLine.setPt(0, $obj.px[0], $obj.py[0])
				$obj.fgLine.setPen($obj.fgPen0)
				$stack[$fp+5] = 1
				$pc = 42
			case 42:
				if (!($stack[$fp+5]<$obj.n)) {
					$pc = 45
					continue
				}
				$obj.fgLine.setPt($stack[$fp+5], $obj.px[$stack[$fp+5]-1], $obj.py[$stack[$fp+5]-1])
				$stack[$fp+1]+=$obj.ls[$stack[$fp+5]-1]
				$stack[$fp+2]=round($stack[$fp+1]*$stack[$fp-3]/$obj.ll)
				if ($obj.fgLine.setPt($stack[$fp+5], $obj.px[$stack[$fp+5]], $obj.py[$stack[$fp+5]], $stack[$fp+2]-$stack[$fp+3], 1, 1))
				return
				$pc = 43
			case 43:
				$stack[$fp+3]=$stack[$fp+2]
				$pc = 44
			case 44:
				$stack[$fp+5]++
				$pc = 42
				continue
			case 45:
				if (!($obj.head)) {
					$pc = 46
					continue
				}
				$obj.fgLine.setPen($obj.fgPen1)
				$pc = 46
			case 46:
				returnf(1)
				continue
			case 47:
				enterf(4);	// clockCycle
				$stack[$fp+1] = $stack[$fp-3]/2
				$stack[$fp+2] = $stack[$fp-3]/5
				$stack[$fp+3] = $stack[$fp-3]/10
				$obj.canUpdate=0
				$obj.prev_clock.translate(-$obj.chw, 0, $stack[$fp+1], 1, 0)
				$obj.next_clock.translate(-$obj.chw, 0, $stack[$fp+1], 1, 0)
				$obj.dot.translate(0, -$obj.ch, $stack[$fp+2], 1, 0)
				if (wait($stack[$fp+1]))
				return
				$pc = 48
			case 48:
				$obj.prev_clock.translate(-$obj.chw, 0, $stack[$fp+1], 1, 0)
				$obj.next_clock.translate(-$obj.chw, 0, $stack[$fp+1], 1, 0)
				$obj.dot.translate(0, $obj.ch, $stack[$fp+2], 1, 0)
				if (wait($stack[$fp+3]))
				return
				$pc = 49
			case 49:
				$obj.canUpdate=1
				$obj.prev_clock.translate(2*$obj.cw, 0)
				$obj.prev_clock.setPen($obj.stall ? ($obj.type ? $g[48] : $g[46]) : $g[47])
				if (wait($stack[$fp+2]*2))
				return
				$pc = 50
			case 50:
				$stack[$fp+4] = $obj.next_clock
				$obj.next_clock=$obj.prev_clock
				$obj.prev_clock=$stack[$fp+4]
				if (!($obj.stall)) {
					$pc = 51
					continue
				}
				$obj.stall--
				$pc = 51
			case 51:
				returnf(1)
				continue
			case 52:
				enterf(0);	// ifExec
				if (!(($g[24]==NO_STALL) || ($g[24]==CTRL_STALL))) {
					$pc = 53
					continue
				}
				fork(37, $g[79])
				fork(37, $g[102][15])
				$g[77].setActive($g[79].newValue)
				$pc = 53
			case 53:
				if (wait(8))
				return
				$pc = 54
			case 54:
				if (!(($g[28]==BRANCH_PREDICTION) && (btbIndex($g[79].value)!=-1))) {
					$pc = 55
					continue
				}
				$g[25]=btbIndex($g[79].value)
				$g[79].setNewValue($g[82][$g[25]].value)
				$g[195]=$g[92]
				$pc = 56
				continue
			case 55:
				$g[79].setNewValue(($g[79].value+4)&127)
				$g[195]=$g[93]
				$pc = 56
			case 56:
				$g[102][15].setNewValue($g[79].newValue)
				$g[101].setNewValue($g[79].value)
				$g[100].setNewInstruction($g[77].instruction[$g[79].value/4])
				if (!(($g[100].vIns>=LSL && $g[100].vIns<=ROR) || ($g[100].vIns>=LSLi && $g[100].vIns<=RORi))) {
					$pc = 57
					continue
				}
				$g[100].vIns2=$g[100].vIns
				$g[100].vIns=MOV
				$g[100].vRs3=$g[100].vRs2
				$g[100].vRs2=$g[100].vRs1
				$pc = 57
			case 57:
				if (wait(8))
				return
				$pc = 58
			case 58:
				fork(41, $g[97], 64)
				fork(41, $g[89], 24)
				fork(41, $g[96], 24)
				if (!(($g[28]==BRANCH_PREDICTION) && (instrIsBranch($g[100].vIns)))) {
					$pc = 64
					continue
				}
				if (!($g[24]==CTRL_STALL)) {
					$pc = 60
					continue
				}
				callf(41, $g[95], 12)
				continue
			case 59:
				$pc = 62
				continue
			case 60:
				callf(41, $g[112], 12)
				continue
			case 61:
				$pc = 62
			case 62:
				callf(41, $g[98], 12)
				continue
			case 63:
				$pc = 66
				continue
			case 64:
				if (wait(24))
				return
				$pc = 65
			case 65:
				$pc = 66
			case 66:
				fork(41, $g[87], 40)
				if (!(($g[28]==BRANCH_PREDICTION) && (btbIndex($g[79].value)!=-1))) {
					$pc = 67
					continue
				}
				$g[81][btbIndex($g[79].value)].highlight($g[22])
				$g[82][btbIndex($g[79].value)].highlight($g[22])
				$pc = 67
			case 67:
				$g[88].setTxt($g[100].getNewInstrTxt())
				if ($g[88].setOpacity(1, 16, 1, 1))
				return
				$pc = 68
			case 68:
				callf(41, $g[195], 16)
				continue
			case 69:
				callf(41, $g[94], 8)
				continue
			case 70:
				returnf(0)
				continue
			case 71:
				enterf(0);	// sendBTBOperands
				callf(41, $g[197], 18)
				continue
			case 72:
				callf(41, $g[115], 6)
				continue
			case 73:
				returnf(0)
				continue
			case 74:
				enterf(1);	// idExec
				if (!($g[24]==NO_STALL)) {
					$pc = 75
					continue
				}
				fork(37, $g[101])
				fork(35, $g[100])
				$pc = 75
			case 75:
				if (wait(16))
				return
				$pc = 76
			case 76:
				fork(41, $g[99], 64)
				if (!(instrIsBranch($g[100].vIns))) {
					$pc = 82
					continue
				}
				$g[125].setNewValue($g[101].value)
				if (!($g[24]==NO_STALL)) {
					$pc = 79
					continue
				}
				if (wait(12))
				return
				$pc = 77
			case 77:
				if (wait(4))
				return
				$pc = 78
			case 78:
				$pc = 81
				continue
			case 79:
				if (wait(24))
				return
				$pc = 80
			case 80:
				$pc = 81
			case 81:
				$pc = 84
				continue
			case 82:
				if (wait(24))
				return
				$pc = 83
			case 83:
				$pc = 84
			case 84:
				if (wait(9))
				return
				$pc = 85
			case 85:
				if (!(instrIsBranch($g[100].vIns))) {
					$pc = 86
					continue
				}
				$pc = 86
			case 86:
				if (!(instrIsBranch($g[100].vIns))) {
					$pc = 87
					continue
				}
				fork(71, $obj)
				$pc = 87
			case 87:
				detectStall()
				if (!($g[24]==NO_STALL || $g[24]==MUL_STALL)) {
					$pc = 88
					continue
				}
				$g[123].setNewValue($g[100].vIns, $g[100].vSBit, $g[100].vCond, $g[100].vRdt, $g[100].vRs1, $g[100].vRs2, $g[100].vIns2, $g[100].vRs3)
				$pc = 89
				continue
			case 88:
				$g[123].setNewValue(STALL, " ", 0, 0, 0, 0, STALL, 0)
				$pc = 89
			case 89:
				if (wait(7))
				return
				$pc = 90
			case 90:
				if (!((instrOpTypeRdt($g[100].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[100].vIns) || instrHasNoDstRI($g[100].vIns)) && ($g[100].vIns!=B) && ($g[123].vIns!=MUL || $g[24]!=MUL_STALL))) {
					$pc = 106
					continue
				}
				if (!(instrOpTypeRs1($g[100].vRs1)!=OP_TYPE_IMM)) {
					$pc = 91
					continue
				}
				$g[102][$g[100].vRs1].highlight($g[22])
				$pc = 91
			case 91:
				if (!(instrOpTypeRs1($g[100].vIns)!=OP_TYPE_UNUSED)) {
					$pc = 92
					continue
				}
				$g[124].setNewValue($g[102][$g[100].vRs1].value)
				$pc = 92
			case 92:
				if (!(instrOpTypeRs2($g[100].vIns)==OP_TYPE_REG)) {
					$pc = 93
					continue
				}
				$g[102][$g[100].vRs2].highlight($g[22])
				$g[125].setNewValue($g[102][$g[100].vRs2].value)
				$pc = 96
				continue
			case 93:
				if (!(!instrIsBranch($g[100].vIns))) {
					$pc = 95
					continue
				}
				if (!(instrOpTypeRdt($g[100].vRdt)!=OP_TYPE_UNUSED)) {
					$pc = 94
					continue
				}
				$g[102][$g[100].vRdt].highlight($g[22])
				$pc = 94
			case 94:
				$g[125].setNewValue($g[102][$g[100].vRdt].value)
				$pc = 95
			case 95:
				$pc = 96
			case 96:
				if (!(instrOpTypeRs1($g[100].vIns)!=OP_TYPE_UNUSED)) {
					$pc = 97
					continue
				}
				$g[122].setTxt("R%d:%02X", $g[100].vRs1, $g[102][$g[100].vRs1].value)
				$g[122].setOpacity(1)
				fork(41, $g[121], 24)
				$pc = 97
			case 97:
				if (!((!instrIsArRI($g[100].vIns)) && ($g[100].vIns!=LDR && $g[100].vIns!=LDRi) && (!instrHasNoOp1RI($g[100].vIns)))) {
					$pc = 105
					continue
				}
				$stack[$fp+1] = ($g[100].vIns==STR || $g[100].vIns==STRi) ? $g[100].vRdt : $g[100].vRs2
				if (!(instrIsBranch($g[100].vIns))) {
					$pc = 100
					continue
				}
				callf(41, $g[113], 18)
				continue
			case 98:
				callf(41, $g[118], 6)
				continue
			case 99:
				$pc = 104
				continue
			case 100:
				if (!(instrOpTypeRs2($g[100].vIns)!=OP_TYPE_UNUSED)) {
					$pc = 103
					continue
				}
				$g[120].setTxt("R%d:%02X", $stack[$fp+1], $g[102][$stack[$fp+1]].value)
				$g[120].setOpacity(1)
				callf(41, $g[119], 18)
				continue
			case 101:
				callf(41, $g[118], 6)
				continue
			case 102:
				$pc = 103
			case 103:
				$pc = 104
			case 104:
				$pc = 105
			case 105:
				$pc = 106
			case 106:
				returnf(0)
				continue
			case 107:
				enterf(8);	// exExec
				if (!($g[24]!=MUL_STALL)) {
					$pc = 108
					continue
				}
				fork(35, $g[123])
				$pc = 108
			case 108:
				if (!(!instrIsNop($g[123].nIns))) {
					$pc = 109
					continue
				}
				fork(37, $g[124])
				fork(37, $g[125])
				$pc = 109
			case 109:
				if (wait(8))
				return
				$pc = 110
			case 110:
				$g[166].setNewValue($g[123].vIns, $g[123].vSBit, $g[123].vCond, $g[123].vRdt, $g[123].vRs1, $g[123].vRs2, $g[123].vIns2, $g[123].vRs3)
				$stack[$fp+7] = 0
				if (!(instrIsBranch($g[123].vIns))) {
					$pc = 128
					continue
				}
				if (!($g[28]==BRANCH_PREDICTION)) {
					$pc = 120
					continue
				}
				if (!((btbIndex($g[125].value)!=-1))) {
					$pc = 117
					continue
				}
				if (!(!testCondition($g[123].vCond) && ($g[82][btbIndex($g[125].value)].value==(($g[125].value+$g[123].vRs2)&124)))) {
					$pc = 112
					continue
				}
				$g[100].setNewValue(STALL, " ", 0, 0, 0, 0, STALL, 0)
				callf(35, $g[100])
				continue
			case 111:
				$g[100].setNewValue(STALL, " ", 0, 0, 0, 0, STALL, 0)
				$pc = 116
				continue
			case 112:
				if (!(testCondition($g[123].vCond) && ($g[82][btbIndex($g[125].value)].value!=(($g[125].value+$g[123].vRs2)&255)))) {
					$pc = 114
					continue
				}
				$g[100].setNewValue(STALL, " ", 0, 0, 0, 0, STALL, 0)
				callf(35, $g[100])
				continue
			case 113:
				$g[100].setNewValue(STALL, " ", 0, 0, 0, 0, STALL, 0)
				$pc = 115
				continue
			case 114:
				$stack[$fp+7]=1
				$pc = 115
			case 115:
				$pc = 116
			case 116:
				$pc = 117
			case 117:
				if (!((btbIndex($g[125].value)==-1) && testCondition($g[100].vCond))) {
					$pc = 119
					continue
				}
				$g[100].setNewValue(STALL, " ", 0, 0, 0, 0, STALL, 0)
				callf(35, $g[100])
				continue
			case 118:
				$g[100].setNewValue(STALL, " ", 0, 0, 0, 0, STALL, 0)
				$pc = 119
			case 119:
				$pc = 120
			case 120:
				if (!($g[123].vCond!=def)) {
					$pc = 127
					continue
				}
				if (!(testCondition($g[123].vCond))) {
					$pc = 121
					continue
				}
				$g[164].setPen($g[110])
				$pc = 122
				continue
			case 121:
				$g[164].setPen($g[111])
				$pc = 122
			case 122:
				$g[161].setPen($g[108])
				if (!(!$g[152].invalid)) {
					$pc = 123
					continue
				}
				$g[158].setPen($g[108])
				$pc = 126
				continue
			case 123:
				if (!(!$g[153].invalid)) {
					$pc = 124
					continue
				}
				$g[159].setPen($g[108])
				$pc = 125
				continue
			case 124:
				$g[160].setPen($g[108])
				$pc = 125
			case 125:
				$pc = 126
			case 126:
				$pc = 127
			case 127:
				$pc = 128
			case 128:
				if (!(instrIsBranch($g[123].vIns) && !$stack[$fp+7])) {
					$pc = 129
					continue
				}
				debug("Calc")
				calcNewPC2()
				fork(41, $g[134], 12)
				fork(41, $g[135], 12)
				$pc = 129
			case 129:
				if (!(instrIsBranch($g[123].vIns) && !$stack[$fp+7] && ($g[24]!=DATA_STALL))) {
					$pc = 130
					continue
				}
				updBTB2()
				$pc = 130
			case 130:
				if (!($g[26] && ($g[28]==BRANCH_PREDICTION))) {
					$pc = 131
					continue
				}
				fork(37, $g[81][$g[25]])
				fork(37, $g[82][$g[25]])
				$pc = 131
			case 131:
				if (!(instrOpTypeRdt($g[123].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[123].vIns) || instrHasNoDstRI($g[123].vIns))) {
					$pc = 164
					continue
				}
				if (!($g[30]==ALU_FORWARDING)) {
					$pc = 136
					continue
				}
				if (!($g[167].tagMatches($g[123].vRs1))) {
					$pc = 132
					continue
				}
				$stack[$fp+1]=$g[131]
				$stack[$fp+4]=$g[167].value
				$pc = 135
				continue
			case 132:
				if (!($g[183].tagMatches($g[123].vRs1))) {
					$pc = 133
					continue
				}
				$stack[$fp+1]=$g[132]
				$stack[$fp+4]=$g[183].value
				$pc = 134
				continue
			case 133:
				$stack[$fp+1]=$g[133]
				$stack[$fp+4]=$g[124].value
				$pc = 134
			case 134:
				$pc = 135
			case 135:
				$pc = 138
				continue
			case 136:
				if (!($g[123].vIns!=B && $g[123].vIns!=BL)) {
					$pc = 137
					continue
				}
				$stack[$fp+1]=$g[133]
				$stack[$fp+4]=$g[124].value
				$pc = 137
			case 137:
				$pc = 138
			case 138:
				if (!($g[123].vIns==BL)) {
					$pc = 139
					continue
				}
				$stack[$fp+2]=$g[136]
				$stack[$fp+5]=$g[125].value
				$pc = 148
				continue
			case 139:
				if (!(instrOpTypeRs2($g[123].vIns)==OP_TYPE_IMM)) {
					$pc = 140
					continue
				}
				$stack[$fp+2]=$g[137]
				$stack[$fp+5]=$g[123].vRs2
				$pc = 147
				continue
			case 140:
				if (!($g[30]==ALU_FORWARDING && $g[123].vIns!=BL)) {
					$pc = 145
					continue
				}
				if (!($g[167].tagMatches($g[123].vRs2))) {
					$pc = 141
					continue
				}
				$stack[$fp+2]=$g[144]
				$stack[$fp+5]=$g[167].value
				$pc = 144
				continue
			case 141:
				if (!($g[183].tagMatches($g[123].vRs2))) {
					$pc = 142
					continue
				}
				$stack[$fp+2]=$g[143]
				$stack[$fp+5]=$g[183].value
				$pc = 143
				continue
			case 142:
				$stack[$fp+2]=$g[136]
				$stack[$fp+5]=$g[125].value
				$pc = 143
			case 143:
				$pc = 144
			case 144:
				$pc = 146
				continue
			case 145:
				$stack[$fp+2]=$g[136]
				$stack[$fp+5]=$g[125].value
				$pc = 146
			case 146:
				$pc = 147
			case 147:
				$pc = 148
			case 148:
				if (!(instrOpTypeRs3($g[123].vIns, $g[123].vIns2)==OP_TYPE_IMM)) {
					$pc = 149
					continue
				}
				$stack[$fp+6]=$g[123].vRs3
				$pc = 156
				continue
			case 149:
				if (!($g[30]==ALU_FORWARDING && $g[123].vIns!=BL)) {
					$pc = 154
					continue
				}
				if (!($g[167].tagMatches($g[123].vRs3))) {
					$pc = 150
					continue
				}
				$stack[$fp+6]=$g[167].value
				$pc = 153
				continue
			case 150:
				if (!($g[183].tagMatches($g[123].vRs3))) {
					$pc = 151
					continue
				}
				$stack[$fp+6]=$g[183].value
				$pc = 152
				continue
			case 151:
				$stack[$fp+6]=$g[102][$g[123].vRs3].value
				$pc = 152
			case 152:
				$pc = 153
			case 153:
				$pc = 155
				continue
			case 154:
				$stack[$fp+2]=$g[136]
				$stack[$fp+6]=$g[102][$g[123].vRs3].value
				$pc = 155
			case 155:
				$pc = 156
			case 156:
				$stack[$fp+8] = instrExecute($g[123].vIns, $g[123].vSBit, $g[123].vCond, $stack[$fp+4], $stack[$fp+5], $g[123].vIns2, $stack[$fp+6], $g[103].n, $g[103].z, $g[103].c, $g[103].v)
				if (!(instrIsLoadOrStore($g[123].vIns))) {
					$pc = 157
					continue
				}
				$g[167].setNewTag(-1)
				$pc = 160
				continue
			case 157:
				if (!($g[123].vIns==BL)) {
					$pc = 158
					continue
				}
				$g[167].setNewTag(14)
				$pc = 159
				continue
			case 158:
				$g[167].setNewTag($g[123].vRdt)
				$pc = 159
			case 159:
				$pc = 160
			case 160:
				if (!(testCondition($g[123].vCond))) {
					$pc = 161
					continue
				}
				$g[167].setNewValue($stack[$fp+8])
				$pc = 162
				continue
			case 161:
				$g[167].setNewTag(-2)
				$pc = 162
			case 162:
				if (!($g[202]>0)) {
					$pc = 163
					continue
				}
				$g[167].setNewTag(-1)
				$pc = 163
			case 163:
				$pc = 164
			case 164:
				if (!(($g[123].vIns==STR || $g[123].vIns==STRi))) {
					$pc = 171
					continue
				}
				if (!($g[31]==FORWARDING_TO_SMDR)) {
					$pc = 169
					continue
				}
				if (!($g[167].tagMatches($g[123].vRdt))) {
					$pc = 165
					continue
				}
				$stack[$fp+3]=$g[145]
				$g[168].setNewValue($g[167].value)
				$pc = 168
				continue
			case 165:
				if (!($g[183].tagMatches($g[123].vRdt))) {
					$pc = 166
					continue
				}
				$stack[$fp+3]=$g[146]
				$g[168].setNewValue($g[183].value)
				$pc = 167
				continue
			case 166:
				$stack[$fp+3]=$g[147]
				$g[168].setNewValue($g[102][$g[123].vRdt].value)
				$pc = 167
			case 167:
				$pc = 168
			case 168:
				$pc = 170
				continue
			case 169:
				$stack[$fp+3]=$g[147]
				$g[168].setNewValue($g[102][$g[123].vRdt].value)
				$pc = 170
			case 170:
				$pc = 171
			case 171:
				if (wait(8))
				return
				$pc = 172
			case 172:
				fork(41, $g[130], 64)
				if (!(($g[123].vIns==STR || $g[123].vIns==STRi))) {
					$pc = 176
					continue
				}
				fork(41, $stack[$fp+3], 24)
				if (!($g[123].vIns2!=NOP)) {
					$pc = 175
					continue
				}
				if (!(instrIsShI($g[123].vIns2))) {
					$pc = 173
					continue
				}
				$g[140].setTxt("%02X", $stack[$fp+6])
				$pc = 174
				continue
			case 173:
				$g[142].setTxt("R%d:%02X", $g[123].vRs3, $g[102][$g[123].vRs3].value)
				$g[142].setOpacity(1)
				$pc = 174
			case 174:
				$pc = 175
			case 175:
				$pc = 176
			case 176:
				if (!(instrOpTypeRdt($g[123].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[123].vIns) || instrHasNoDstRI($g[123].vIns))) {
					$pc = 183
					continue
				}
				if (!($stack[$fp+1]!=0 && (instrOpTypeRs1($g[123].vIns)!=OP_TYPE_UNUSED))) {
					$pc = 177
					continue
				}
				fork(41, $stack[$fp+1], 24)
				$pc = 177
			case 177:
				if (!($stack[$fp+2]==$g[137])) {
					$pc = 178
					continue
				}
				$g[138].setTxt("%02X", $stack[$fp+5])
				$g[138].setOpacity(1)
				$pc = 178
			case 178:
				if (!(instrOpTypeRs2($g[123].vIns)!=OP_TYPE_UNUSED)) {
					$pc = 179
					continue
				}
				fork(41, $stack[$fp+2], 24)
				$pc = 179
			case 179:
				if (!($g[123].vIns2!=NOP)) {
					$pc = 182
					continue
				}
				if (!(instrIsShI($g[123].vIns2))) {
					$pc = 180
					continue
				}
				fork(41, $g[139], 24)
				$g[140].setTxt("%02X", $stack[$fp+6])
				$pc = 181
				continue
			case 180:
				fork(41, $g[141], 24)
				$g[142].setTxt("R%d:%02X", $g[123].vRs3, $g[102][$g[123].vRs3].value)
				$g[142].setOpacity(1)
				$pc = 181
			case 181:
				$pc = 182
			case 182:
				$pc = 183
			case 183:
				if (wait(12))
				return
				$pc = 184
			case 184:
				if (!($g[123].vIns2!=NOP)) {
					$pc = 186
					continue
				}
				if (!(instrIsShI($g[123].vIns2))) {
					$pc = 185
					continue
				}
				$g[140].setOpacity(1)
				$pc = 185
			case 185:
				$pc = 186
			case 186:
				if (wait(12))
				return
				$pc = 187
			case 187:
				if (!(($g[123].vIns==STR || $g[123].vIns==STRi))) {
					$pc = 188
					continue
				}
				fork(41, $g[148], 40)
				$pc = 188
			case 188:
				if (!((instrOpTypeRdt($g[123].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[123].vIns) || instrHasNoDstRI($g[123].vIns)))) {
					$pc = 198
					continue
				}
				$g[129].setTxtOp($g[123].vIns)
				if (!($stack[$fp+1]!=0 && (instrOpTypeRs1($g[123].vIns)!=OP_TYPE_UNUSED))) {
					$pc = 189
					continue
				}
				fork(41, $g[149], 40)
				$pc = 189
			case 189:
				if (!(instrOpTypeRs2($g[123].vIns)!=OP_TYPE_UNUSED)) {
					$pc = 190
					continue
				}
				fork(41, $g[150], 40)
				$pc = 190
			case 190:
				if (wait(20))
				return
				$pc = 191
			case 191:
				if (!($g[123].vIns!=MUL || $g[24]!=MUL_STALL)) {
					$pc = 192
					continue
				}
				$g[129].txtResult.setTxt("%02X", $stack[$fp+8])
				$g[129].txtResult.setOpacity(1, 20, 1, 0)
				$pc = 192
			case 192:
				if (!($g[123].vCond!=def && testCondition($g[123].vCond))) {
					$pc = 197
					continue
				}
				$g[162].setPen($g[110])
				$g[157].setPen($g[108])
				if (!(!$g[152].invalid)) {
					$pc = 193
					continue
				}
				$g[154].setPen($g[108])
				$pc = 196
				continue
			case 193:
				if (!(!$g[153].invalid)) {
					$pc = 194
					continue
				}
				$g[155].setPen($g[108])
				$pc = 195
				continue
			case 194:
				$g[156].setPen($g[108])
				$pc = 195
			case 195:
				$pc = 196
			case 196:
				$pc = 197
			case 197:
				$pc = 198
			case 198:
				if (!(instrOpTypeRdt($g[123].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[123].vIns) || instrHasNoDstRI($g[123].vIns))) {
					$pc = 199
					continue
				}
				$g[167].setInvalid(0)
				$pc = 201
				continue
			case 199:
				if (!($g[123].vIns==NOP || !testCondition($g[123].vCond) || instrIsBranch($g[123].vIns) || $g[123].vIns==STALL)) {
					$pc = 200
					continue
				}
				$g[167].setInvalid(1)
				$pc = 200
			case 200:
				$pc = 201
			case 201:
				if (!(($g[123].vIns!=B) && ($g[123].vIns==NOP || !testCondition($g[123].vCond)))) {
					$pc = 209
					continue
				}
				if (!($g[123].vCond!=def)) {
					$pc = 202
					continue
				}
				$g[198]=1
				$pc = 202
			case 202:
				if (!($g[198])) {
					$pc = 207
					continue
				}
				$g[162].setPen($g[111])
				$g[157].setPen($g[108])
				if (!(!$g[152].invalid)) {
					$pc = 203
					continue
				}
				$g[154].setPen($g[108])
				$pc = 206
				continue
			case 203:
				if (!(!$g[153].invalid)) {
					$pc = 204
					continue
				}
				$g[155].setPen($g[108])
				$pc = 205
				continue
			case 204:
				$g[156].setPen($g[108])
				$pc = 205
			case 205:
				$pc = 206
			case 206:
				$g[198]=0
				$pc = 207
			case 207:
				if (wait(40))
				return
				$pc = 208
			case 208:
				$g[167].updateLabel()
				$pc = 209
			case 209:
				returnf(0)
				continue
			case 210:
				enterf(0);	// maExec
				if (!($g[24]==MUL_STALL)) {
					$pc = 211
					continue
				}
				$g[166].setNewValue(STALL, " ", 0, 0, 0, 0, STALL, 0)
				$pc = 211
			case 211:
				if (!($g[167].tag==-2)) {
					$pc = 212
					continue
				}
				$g[183].setNewTag(-2)
				$pc = 212
			case 212:
				fork(35, $g[166])
				if (!(instrOpTypeRdt($g[166].nIns)==OP_TYPE_REG || instrHasNoDstRR($g[166].vIns) || instrHasNoDstRI($g[166].vIns) || $g[123].vIns==BL)) {
					$pc = 213
					continue
				}
				fork(37, $g[167])
				$pc = 213
			case 213:
				if (wait(1))
				return
				$pc = 214
			case 214:
				if (!(($g[166].vSBit=="S") || ($g[166].vIns>=CMN && $g[166].vIns<=TST) || ($g[166].vIns>=CMNi && $g[166].vIns<=TSTi))) {
					$pc = 215
					continue
				}
				$g[152].update()
				$pc = 216
				continue
			case 215:
				$g[152].setInvalid(1)
				$pc = 216
			case 216:
				if (!($g[166].nIns==STR || $g[166].nIns==STRi)) {
					$pc = 217
					continue
				}
				fork(37, $g[168])
				$pc = 217
			case 217:
				if (wait(7))
				return
				$pc = 218
			case 218:
				$g[182].setNewValue($g[166].vIns, $g[166].vSBit, $g[166].vCond, $g[166].vRdt, $g[166].vRs1, $g[166].vRs2, $g[166].vIns2, $g[166].vRs3)
				if (!((instrOpTypeRdt($g[166].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[166].vIns) || instrHasNoDstRI($g[166].vIns) || $g[123].vIns==BL) && ($g[166].vIns!=STR) && ($g[166].vIns!=STRi))) {
					$pc = 222
					continue
				}
				if (!(($g[166].vIns==LDR) || ($g[166].vIns==LDRi))) {
					$pc = 220
					continue
				}
				$g[183].setNewValue($g[171][($g[167].value/4)%16].value)
				if (!($g[183].tag!=-2)) {
					$pc = 219
					continue
				}
				$g[183].setNewTag($g[166].vRdt)
				$pc = 219
			case 219:
				$pc = 221
				continue
			case 220:
				$g[183].setNewValue($g[167].value)
				$g[183].setNewTag($g[167].tag)
				$pc = 221
			case 221:
				$g[183].setInvalid(0)
				$pc = 222
			case 222:
				if (wait(8))
				return
				$pc = 223
			case 223:
				fork(41, $g[176], 64)
				if (!(($g[166].vIns==STR || $g[166].vIns==STRi) && ($g[167].tag!=-2))) {
					$pc = 226
					continue
				}
				$g[171][($g[167].value/4)%16].setNewValue($g[168].value)
				fork(41, $g[180], 24)
				callf(41, $g[179], 24)
				continue
			case 224:
				callf(39, $g[171][($g[167].value/4)%16], $g[173][(($g[167].value/4)%16)-8])
				continue
			case 225:
				$pc = 234
				continue
			case 226:
				if (!(instrOpTypeRdt($g[166].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[166].vIns) || instrHasNoDstRI($g[166].vIns) || $g[123].vIns==BL)) {
					$pc = 233
					continue
				}
				if (!(($g[166].vIns==LDR || $g[166].vIns==LDRi) && ($g[167].tag!=-2))) {
					$pc = 229
					continue
				}
				callf(41, $g[179], 24)
				continue
			case 227:
				$g[171][($g[167].value/4)%16].highlight($g[22])
				callf(41, $g[181], 24)
				continue
			case 228:
				$pc = 231
				continue
			case 229:
				callf(41, $g[177], 48)
				continue
			case 230:
				$pc = 231
			case 231:
				callf(41, $g[178], 16)
				continue
			case 232:
				$pc = 233
			case 233:
				$pc = 234
			case 234:
				if (!($g[166].vIns==NOP || !testCondition($g[166].vCond) || $g[123].vIns==B || $g[123].vIns==STALL)) {
					$pc = 236
					continue
				}
				if (wait(64))
				return
				$pc = 235
			case 235:
				$g[183].setInvalid(1)
				$g[183].updateLabel()
				$pc = 236
			case 236:
				if (!(($g[166].vSBit=="S") || ($g[166].vIns>=CMN && $g[166].vIns<=TST) || ($g[166].vIns>=CMNi && $g[166].vIns<=TSTi))) {
					$pc = 237
					continue
				}
				$g[153].setNNValue($g[152].n)
				$g[153].setNZValue($g[152].z)
				$g[153].setNCValue($g[152].c)
				$g[153].setNVValue($g[152].v)
				$pc = 237
			case 237:
				returnf(0)
				continue
			case 238:
				enterf(0);	// wbExec
				fork(35, $g[182])
				if (wait(1))
				return
				$pc = 239
			case 239:
				if (!((instrOpTypeRdt($g[182].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[182].vIns) || instrHasNoDstRI($g[182].vIns) || $g[182].vIns==BL))) {
					$pc = 240
					continue
				}
				fork(37, $g[183])
				$pc = 240
			case 240:
				if (!(($g[182].vSBit=="S") || ($g[182].vIns>=CMN && $g[182].vIns<=TST) || ($g[182].vIns>=CMNi && $g[182].vIns<=TSTi))) {
					$pc = 241
					continue
				}
				$g[153].update()
				$pc = 242
				continue
			case 241:
				$g[153].setInvalid(1)
				$pc = 242
			case 242:
				if (wait(7))
				return
				$pc = 243
			case 243:
				if (!(($g[182].vIns!=STRi) && ($g[182].vIns!=STR) && ($g[182].vIns!=B) && (instrOpTypeRdt($g[182].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[182].vIns) || instrHasNoDstRI($g[182].vIns) || $g[182].vIns==BL) && ($g[183].tag!=-2))) {
					$pc = 251
					continue
				}
				if (!(($g[182].vSBit=="S") || ($g[182].vIns>=CMN && $g[182].vIns<=TST) || ($g[182].vIns>=CMNi && $g[182].vIns<=TSTi))) {
					$pc = 244
					continue
				}
				$g[103].setNNValue($g[153].n)
				$g[103].setNZValue($g[153].z)
				$g[103].setNCValue($g[153].c)
				$g[103].setNVValue($g[153].v)
				$pc = 244
			case 244:
				$g[102][$g[183].tag].setNewValue($g[183].value)
				if (wait(8))
				return
				$pc = 245
			case 245:
				fork(41, $g[184], 24)
				if (!(($g[182].vSBit=="S") || ($g[182].vIns>=CMN && $g[182].vIns<=TST) || ($g[182].vIns>=CMNi && $g[182].vIns<=TSTi))) {
					$pc = 246
					continue
				}
				fork(41, $g[185], 24)
				$pc = 246
			case 246:
				callf(37, $g[102][$g[183].tag])
				continue
			case 247:
				if (!(($g[182].vSBit=="S") || ($g[182].vIns>=CMN && $g[182].vIns<=TST) || ($g[182].vIns>=CMNi && $g[182].vIns<=TSTi))) {
					$pc = 248
					continue
				}
				$g[103].update()
				$pc = 248
			case 248:
				if (!($g[183].tag==13)) {
					$pc = 249
					continue
				}
				$g[174].moveSP($g[102][13].value)
				$pc = 249
			case 249:
				if (wait(19))
				return
				$pc = 250
			case 250:
				$pc = 253
				continue
			case 251:
				if (wait(67))
				return
				$pc = 252
			case 252:
				$pc = 253
			case 253:
				if (!($g[182].vIns!=STALL && $g[182].vIns!=EMPTY)) {
					$pc = 254
					continue
				}
				$g[34]++
				$g[74].setTxt("%4d", $g[34])
				$pc = 254
			case 254:
				$g[35]++
				$g[75].setTxt("%4d", $g[35])
				returnf(0)
				continue
			case 255:
				enterf(0);	// nonPipelinedBranch
				callf(41, $g[97], 12)
				continue
			case 256:
				if (wait(12))
				return
				$pc = 257
			case 257:
				if (!(instrIsBranch($g[100].vIns))) {
					$pc = 260
					continue
				}
				if (!(($g[102][$g[100].vRs1].value==0)==($g[100].vIns==B))) {
					$pc = 258
					continue
				}
				$g[79].setNewValue(($g[79].value+$g[100].vRs2)&127)
				$pc = 259
				continue
			case 258:
				$g[79].setNewValue(($g[79].value+4)&127)
				$pc = 259
			case 259:
				$pc = 261
				continue
			case 260:
				$g[79].setNewValue(($g[79].value+4)&127)
				$pc = 261
			case 261:
				$g[102][15].setNewValue($g[79].newValue)
				callf(41, $g[94], 6)
				continue
			case 262:
				returnf(0)
				continue
			case 263:
				enterf(5);	// execNonPipelined
				callf(37, $g[79])
				continue
			case 264:
				callf(37, $g[102][15])
				continue
			case 265:
				$g[77].setActive($g[79].newValue)
				callf(41, $g[89], 24)
				continue
			case 266:
				callf(41, $g[87], 40)
				continue
			case 267:
				$g[100].setNewInstruction($g[77].instruction[$g[79].value/4])
				$g[88].setTxt($g[100].getNewInstrTxt())
				$g[88].translate(60/2+70, 0, 20, 1, 0)
				callf(35, $g[100])
				continue
			case 268:
				if (!((instrOpTypeRs2($g[100].vIns)==OP_TYPE_IMM) && (instrOpTypeRdt($g[100].vIns)==OP_TYPE_REG))) {
					$pc = 269
					continue
				}
				fork(41, $g[99], 64)
				$pc = 269
			case 269:
				fork(255, $obj)
				if (wait(24))
				return
				$pc = 270
			case 270:
				if (!(instrOpTypeRdt($g[100].vIns)==OP_TYPE_REG)) {
					$pc = 281
					continue
				}
				$stack[$fp+1]=$g[102][$g[100].vRs1].value
				if (!(instrOpTypeRs1($g[100].vRs1!=OP_TYPE_IMM))) {
					$pc = 271
					continue
				}
				$g[102][$g[100].vRs1].highlight($g[22])
				$pc = 271
			case 271:
				$g[122].setTxt("R%d:%02X", $g[100].vRs1, $g[102][$g[100].vRs1].value)
				$g[122].setOpacity(1)
				fork(41, $g[121], 40)
				if (!((instrOpTypeRs2($g[100].vIns)==OP_TYPE_REG) || ($g[100].vIns==STR || $g[100].vIns==STRi))) {
					$pc = 278
					continue
				}
				if (!(instrOpTypeRs2($g[100].vIns)==OP_TYPE_IMM)) {
					$pc = 273
					continue
				}
				$stack[$fp+2]=$g[102][$g[100].vRdt].value
				if (!(instrOpTypeRdt($g[100].vIns!=OP_TYPE_UNUSED))) {
					$pc = 272
					continue
				}
				$g[102][$g[100].vRdt].highlight($g[22])
				$pc = 272
			case 272:
				$pc = 274
				continue
			case 273:
				$stack[$fp+2]=$g[102][$g[100].vRs2].value
				$g[102][$g[100].vRs2].highlight($g[22])
				$pc = 274
			case 274:
				if (!((!instrIsArRI($g[100].vIns)) && ($g[100].vIns!=LDR && $g[100].vIns!=LDRi))) {
					$pc = 277
					continue
				}
				$stack[$fp+5] = ($g[100].vIns==STR || $g[100].vIns==STRi) ? $g[100].vRdt : $g[100].vRs2
				$g[120].setTxt("R%d:%02X", $stack[$fp+5], $g[102][$stack[$fp+5]].value)
				$g[120].setOpacity(1)
				callf(41, $g[119], 20)
				continue
			case 275:
				callf(41, $g[118], 20)
				continue
			case 276:
				$pc = 277
			case 277:
				$pc = 280
				continue
			case 278:
				if (wait(40))
				return
				$pc = 279
			case 279:
				$pc = 280
			case 280:
				$pc = 283
				continue
			case 281:
				if (wait(40))
				return
				$pc = 282
			case 282:
				$pc = 283
			case 283:
				if (!(instrOpTypeRdt($g[100].vIns)==OP_TYPE_REG)) {
					$pc = 284
					continue
				}
				$g[129].setTxtOp($g[100].vIns)
				$pc = 284
			case 284:
				if (!($g[100].vIns==STR || $g[100].vIns==STRi)) {
					$pc = 290
					continue
				}
				if (!($g[123].vIns2!=NOP)) {
					$pc = 287
					continue
				}
				if (!(instrIsShI($g[100].vIns2))) {
					$pc = 285
					continue
				}
				fork(41, $g[139], 24)
				$g[140].setTxt("%02X", $g[100].vRs3)
				$g[140].setOpacity(1)
				$pc = 286
				continue
			case 285:
				fork(41, $g[141], 24)
				$g[142].setTxt("R%d:%02X", $g[100].vRs3, $g[102][$g[100].vRs3].value)
				$g[142].setOpacity(1)
				$pc = 286
			case 286:
				$pc = 287
			case 287:
				fork(41, $g[147], 40)
				fork(41, $g[133], 40)
				$g[138].setTxt("%02X", $g[100].vRs2)
				$g[138].setOpacity(1)
				callf(41, $g[137], 40)
				continue
			case 288:
				fork(41, $g[148], 40)
				fork(41, $g[150], 40)
				callf(41, $g[149], 40)
				continue
			case 289:
				$stack[$fp+4]=$g[102][$g[100].vRdt].value
				$stack[$fp+3]=instrExecute($g[100].vIns, $g[100].vSBit, $g[100].vCond, $stack[$fp+1], $g[100].vRs2, $g[100].vIns2, $g[100].vRs3, $g[103].n, $g[103].z, $g[103].c, $g[103].v)
				$pc = 302
				continue
			case 290:
				if (!(instrOpTypeRdt($g[100].vIns)==OP_TYPE_REG)) {
					$pc = 299
					continue
				}
				fork(41, $g[133], 40)
				if (!($g[123].vIns2!=NOP)) {
					$pc = 293
					continue
				}
				if (!(instrIsShI($g[100].vIns2))) {
					$pc = 291
					continue
				}
				fork(41, $g[139], 24)
				$g[140].setTxt("%02X", $g[100].vRs3)
				$g[140].setOpacity(1)
				$pc = 292
				continue
			case 291:
				fork(41, $g[141], 24)
				$g[142].setTxt("R%d:%02X", $g[100].vRs3, $g[102][$g[100].vRs3].value)
				$g[142].setOpacity(1)
				$pc = 292
			case 292:
				$pc = 293
			case 293:
				if (!(instrOpTypeRs2($g[100].vIns)==OP_TYPE_IMM)) {
					$pc = 295
					continue
				}
				$g[138].setTxt("%02X", $g[100].vRs2)
				$g[138].setOpacity(1)
				callf(41, $g[137], 40)
				continue
			case 294:
				$stack[$fp+3]=instrExecute($g[100].vIns, $g[100].vSBit, $g[100].vCond, $stack[$fp+1], $g[100].vRs2, $g[100].vIns2, $g[100].vRs3, $g[103].n, $g[103].z, $g[103].c, $g[103].v)
				$pc = 297
				continue
			case 295:
				callf(41, $g[136], 40)
				continue
			case 296:
				$stack[$fp+3]=instrExecute($g[100].vIns, $g[100].vSBit, $g[100].vCond, $stack[$fp+1], $stack[$fp+2], $g[100].vIns2, $g[102][$g[100].vRs3].value, $g[103].n, $g[103].z, $g[103].c, $g[103].v)
				$pc = 297
			case 297:
				fork(41, $g[150], 40)
				callf(41, $g[149], 40)
				continue
			case 298:
				$pc = 301
				continue
			case 299:
				if (wait(80))
				return
				$pc = 300
			case 300:
				$pc = 301
			case 301:
				$pc = 302
			case 302:
				if (!(testCondition($g[100].vCond))) {
					$pc = 324
					continue
				}
				if (!($g[100].vCond!=def)) {
					$pc = 303
					continue
				}
				$g[162].setPen($g[110])
				$g[157].setPen($g[108])
				$g[156].setPen($g[108])
				$pc = 303
			case 303:
				if (!($g[100].vIns==LDR || $g[100].vIns==LDRi)) {
					$pc = 307
					continue
				}
				callf(41, $g[179], 20)
				continue
			case 304:
				$g[171][(($stack[$fp+3])/4)%16].highlight($g[22])
				callf(41, $g[181], 20)
				continue
			case 305:
				callf(41, $g[178], 40)
				continue
			case 306:
				$stack[$fp+3]=$g[171][(($stack[$fp+3])/4)%16].value
				$pc = 317
				continue
			case 307:
				if (!($g[100].vIns==STR || $g[100].vIns==STRi)) {
					$pc = 310
					continue
				}
				fork(41, $g[180], 20)
				callf(41, $g[179], 20)
				continue
			case 308:
				$g[171][(($stack[$fp+3])/4)%16].setNewValue($stack[$fp+4])
				callf(39, $g[171][(($stack[$fp+3])/4)%16], $g[173][((($stack[$fp+3])/4)%16)-8])
				continue
			case 309:
				$pc = 316
				continue
			case 310:
				if (!(instrOpTypeRdt($g[100].vIns)==OP_TYPE_REG)) {
					$pc = 313
					continue
				}
				callf(41, $g[177], 40)
				continue
			case 311:
				callf(41, $g[178], 40)
				continue
			case 312:
				$pc = 315
				continue
			case 313:
				if (wait(80))
				return
				$pc = 314
			case 314:
				$pc = 315
			case 315:
				$pc = 316
			case 316:
				$pc = 317
			case 317:
				$g[102][0].unHighlight()
				$g[102][1].unHighlight()
				$g[102][2].unHighlight()
				$g[102][3].unHighlight()
				if (!((instrOpTypeRdt($g[100].vIns)==OP_TYPE_REG) && ($g[100].vIns!=STR) && ($g[100].vIns!=STRi))) {
					$pc = 321
					continue
				}
				callf(41, $g[184], 40)
				continue
			case 318:
				$g[102][$g[100].vRdt].setNewValue($stack[$fp+3])
				callf(37, $g[102][$g[100].vRdt])
				continue
			case 319:
				if (wait(19))
				return
				$pc = 320
			case 320:
				$pc = 323
				continue
			case 321:
				if (wait(75))
				return
				$pc = 322
			case 322:
				$pc = 323
			case 323:
				$pc = 325
				continue
			case 324:
				$g[162].setPen($g[111])
				$g[157].setPen($g[108])
				$g[156].setPen($g[108])
				$pc = 325
			case 325:
				$g[35]+=5
				$g[34]++
				$g[74].setTxt("%4d", $g[34])
				$g[75].setTxt("%4d", $g[35])
				returnf(0)
				continue
			case 326:
				enterf(0);	// exec
				$g[102][0].unHighlight()
				$g[102][1].unHighlight()
				$g[102][2].unHighlight()
				$g[102][3].unHighlight()
				$g[171][0].unHighlight()
				$g[171][1].unHighlight()
				$g[171][2].unHighlight()
				$g[171][3].unHighlight()
				$g[81][0].unHighlight()
				$g[81][1].unHighlight()
				$g[82][0].unHighlight()
				$g[82][1].unHighlight()
				if (!($g[27]==PIPELINING_ENABLED)) {
					$pc = 327
					continue
				}
				fork(52, $obj)
				fork(74, $obj)
				fork(107, $obj)
				fork(210, $obj)
				fork(238, $obj)
				$pc = 328
				continue
			case 327:
				fork(263, $obj)
				$pc = 328
			case 328:
				if (wait(8))
				return
				$pc = 329
			case 329:
				resetWires()
				if (wait(($g[27]==PIPELINING_ENABLED) ? 72 : 392))
				return
				$pc = 330
			case 330:
				checkPoint()
				returnf(0)
				continue
			case 331:
				enterf(0);	// run
				if (wait(1))
				return
				$pc = 332
			case 332:
				$g[33]=1
				setlocked()
				$pc = 333
			case 333:
				if (!(1)) {
					$pc = 338
					continue
				}
				fork(47, $g[78], ($g[27]==PIPELINING_ENABLED) ? 80 : 400)
				callf(326, $obj)
				continue
			case 334:
				if (!((($g[182].vIns==HALT) && ($g[27]==PIPELINING_ENABLED)) || (($g[100].vIns==HALT) && ($g[27]==PIPELINING_DISABLED)))) {
					$pc = 336
					continue
				}
				stop()
				if (!($g[189])) {
					$pc = 335
					continue
				}
				$pc = 338
				continue
				$pc = 335
			case 335:
				$pc = 336
			case 336:
				if (wait(1))
				return
				$pc = 337
			case 337:
				$pc = 333
				continue
			case 338:
				returnf(0)
				continue
			}
		}
	}

	this.getThread = function() { return $thread; };
	this.execute = execute;
	this.resumeThread = resumeThread;
	this.suspendThread = suspendThread;
	this.waitTracker = waitTracker;

}

// eof
