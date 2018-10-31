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
	const WIDTH = 1920
	const HEIGHT = 1080
	const maxexample = 5
	const NO_STALL = 0
	const DATA_STALL = 1
	const CTRL_STALL = 2
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
	const MAX_INSTR = 31
	const NOP = 0
	const ADD = 1
	const SUB = 2
	const AND = 3
	const OR = 4
	const XOR = 5
	const SLL = 6
	const SRL = 7
	const SLT = 8
	const SGT = 9
	const SLE = 10
	const SGE = 11
	const ADDi = 12
	const SUBi = 13
	const ANDi = 14
	const ORi = 15
	const XORi = 16
	const SLLi = 17
	const SRLi = 18
	const SLTi = 19
	const SGTi = 20
	const SLEi = 21
	const SGEi = 22
	const LD = 23
	const ST = 24
	const BEQZ = 25
	const BNEZ = 26
	const J = 27
	const JAL = 28
	const JR = 29
	const JALR = 30
	const HALT = 31
	const STALL = 32
	const EMPTY = 33
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
	const LOGOW = 20
	const LOGOH = 20

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
		return (instr>=ADD && instr<=SGE) ? 1 : 0
	}

	function instrIsArRI(instr) {
		return ((instr>=ADDi) && (instr<=SGEi)) ? 1 : 0
	}

	function instrIsBranch(instr) {
		return ((instr==BEQZ) || (instr==BNEZ)) ? 1 : 0
	}

	function isJorJAL(instr) {
		return ((instr==J) || (instr==JAL)) ? 1 : 0
	}

	function instrIsJumpR(instr) {
		return ((instr==JR) || (instr==JALR)) ? 1 : 0
	}

	function instrIsBranchOrJump(instr) {
		return (instrIsBranch(instr) || isJorJAL(instr) || instrIsJumpR(instr)) ? 1 : 0
	}

	function instrIsJumpAndLink(instr) {
		return ((instr==JAL) || (instr==JALR)) ? 1 : 0
	}

	function instrIsLoadOrStore(instr) {
		return ((instr==LD) || (instr==ST)) ? 1 : 0
	}

	function instrOpTypeRdt(instr) {
		if (instrIsArRR(instr) || instrIsArRI(instr) || instrIsJumpAndLink(instr) || instrIsLoadOrStore(instr))
		return OP_TYPE_REG
		else 
		return OP_TYPE_UNUSED
	}

	function instrOpTypeRs1(instr) {
		if (instrIsNop(instr) || instrIsJumpR(instr) || isJorJAL(instr))
		return OP_TYPE_UNUSED
		else 
		return OP_TYPE_REG
	}

	function instrOpTypeRs2(instr) {
		if (instrIsNop(instr))
		return OP_TYPE_UNUSED
		else 
		if (instrIsArRR(instr) || instrIsJumpR(instr))
		return OP_TYPE_REG
		else 
		return OP_TYPE_IMM
	}

	function instrText(instr, rdt, rs1, rs2) {
		if (instrIsNop(instr))
		return sprintf("%s", $g[35][instr])
		else 
		if (instrIsArRR(instr))
		return sprintf("%s R%d,R%d,R%d", $g[35][instr], rdt, rs1, rs2)
		else 
		if (instrIsArRI(instr))
		return sprintf("%s R%d,R%d,%02X", $g[35][instr], rdt, rs1, rs2)
		else 
		if (instr==LD)
		return sprintf("LD R%d,R%d+%02X", rdt, rs1, rs2)
		else 
		if (instr==ST)
		return sprintf("ST R%d,R%d+%02X", rdt, rs1, rs2)
		else 
		if (instrIsBranch(instr))
		return sprintf("%s R%d,%02X", $g[35][instr], rs1, rs2)
		else 
		if (instr==J)
		return sprintf("%s %02X", $g[35][instr], rs2)
		else 
		if (instr==JAL)
		return sprintf("%s R%d, %02X", $g[35][instr], rdt, rs2)
		else 
		if (instr==JR)
		return sprintf("%s R%d", $g[35][instr], rs2)
		else 
		if (instr==JALR)
		return sprintf("%s R%d, R%d", $g[35][instr], rdt, rs2)
		return "EMPTY"
	}

	function se8(t) {
		if (t&128)
		return (-1^255|t)
		else 
		return t
	}

	function instrExecute(instr, op1, op2) {
		if (instr==ADD || instr==ADDi)
		return (se8(op1)+se8(op2))&255
		else 
		if (instr==SUB || instr==SUBi)
		return (se8(op1)-se8(op2))&255
		else 
		if (instr==AND || instr==ANDi)
		return op1&op2
		else 
		if (instr==OR || instr==ORi)
		return op1|op2
		else 
		if (instr==XOR || instr==XORi)
		return op1^op2
		else 
		if (instr==SLL || instr==SLLi)
		return (op1<<op2)&255
		else 
		if (instr==SRL || instr==SRLi)
		return (op1>>op2)&255
		else 
		if (instr==SLT || instr==SLTi)
		return op1<op2 ? 1 : 0
		else 
		if (instr==SGT || instr==SGTi)
		return op1>op2 ? 1 : 0
		else 
		if (instr==SLE || instr==SLEi)
		return op1<=op2 ? 1 : 0
		else 
		if (instr==SGE || instr==SGEi)
		return op1>=op2 ? 1 : 0
		else 
		if (instr==LD || instr==ST)
		return (se8(op1)+se8(op2))&255
		else 
		if (instr==JAL || instr==JALR)
		return op2
		else 
		return 238
	}

	function Instruction(_x, _y, _w, _h, _addr) {
		VObj.call(this)
		this.x = _x
		this.y = _y
		this.w = _w
		this.h = _h
		this.addr = _addr
		this.vIns = 0, this.vRdt = 0, this.vRs1 = 0, this.vRs2 = 0
		this.opTypeRdt = 0, this.opTypeRs1 = 0, this.opTypeRs2 = 0
		this.clk
		this.fw = this.w/6
		this.insPen = new SolidPen(0, 0, BLACK)
		this.rdtPen = new SolidPen(0, 0, BLACK)
		this.rs1Pen = new SolidPen(0, 0, BLACK)
		this.rs2Pen = new SolidPen(0, 0, BLACK)
		this.brush = new SolidBrush(WHITE)
		this.adr = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x, this.y, this.fw, this.h, 0, $g[15], "%02X", this.addr)
		this.ins = new Rectangle2($g[0], $g[17], HLEFT, 0, this.brush, this.x+this.fw, this.y, 2*this.fw, this.h, this.insPen, $g[15], " NOP")
		this.rdt = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+3*this.fw, this.y, this.fw, this.h, this.rdtPen, $g[15], "-")
		this.rs1 = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+4*this.fw, this.y, this.fw, this.h, this.rs1Pen, $g[15], "-")
		this.rs2 = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+5*this.fw, this.y, this.fw, this.h, this.rs2Pen, $g[15], "-")
		this.dot = new Rectangle2($g[0], $g[17], 0, 0, $g[11], this.x+this.fw*0.80000000000000004, this.y+2, this.h/2, this.h/2)
		this.dot.setOpacity(0)
		this.arrowDown = new Line($g[0], $g[17], 0, $g[39], 0, 0, this.x+this.w+2, this.y+this.h*0.5, 5, 0, 0, 0, 0, 0)
		this.arrowUp = new Line($g[0], $g[17], 0, $g[39], 0, 0, this.x-2, this.y+this.h*0.5, -5, 0, 0, 0, 0, 0)
		this.arrowDown.setOpacity(0)
		this.arrowUp.setOpacity(0)
		this.adr.addEventHandler("eventEE", this, this.$eh0)
		this.ins.addEventHandler("eventEE", this, this.$eh1)
		this.rdt.addEventHandler("eventEE", this, this.$eh2)
		this.rs1.addEventHandler("eventEE", this, this.$eh3)
		this.rs2.addEventHandler("eventEE", this, this.$eh4)
		this.ins.addEventHandler("eventMB", this, this.$eh5)
		this.rdt.addEventHandler("eventMB", this, this.$eh6)
		this.rs1.addEventHandler("eventMB", this, this.$eh7)
		this.rs2.addEventHandler("eventMB", this, this.$eh8)
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
		if (this.opTypeRdt!=OP_TYPE_UNUSED) {
			this.rdtPen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rdtPen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh3 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRs1!=OP_TYPE_UNUSED) {
			this.rs1Pen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rs1Pen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh4 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRs2!=OP_TYPE_UNUSED) {
			this.rs2Pen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rs2Pen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.getOpcode = function() {
		return this.vIns<<24|this.vRdt<<16|this.vRs1<<8|this.vRs2
	}

	Instruction.prototype.initRegs = function(remember) {
		let offset
		this.ins.setTxt("%c%s", 32, $g[35][this.vIns])
		this.opTypeRdt=instrOpTypeRdt(this.vIns)
		this.opTypeRs1=instrOpTypeRs1(this.vIns)
		this.opTypeRs2=instrOpTypeRs2(this.vIns)
		if (this.opTypeRs2==OP_TYPE_REG)
		this.vRs2=(this.vRs2%4)
		if (this.opTypeRdt==OP_TYPE_UNUSED)
		this.rdt.setTxt("-")
		else 
		this.rdt.setTxt("R%d", this.vRdt)
		if (this.opTypeRs1==OP_TYPE_UNUSED)
		this.rs1.setTxt("-")
		else 
		this.rs1.setTxt("R%d", this.vRs1)
		if (this.opTypeRs2==OP_TYPE_UNUSED)
		this.rs2.setTxt("-")
		else 
		if (this.opTypeRs2==OP_TYPE_REG)
		this.rs2.setTxt("R%d", this.vRs2)
		else 
		this.rs2.setTxt("%02X", this.vRs2)
		if (instrIsBranch(this.vIns) || isJorJAL(this.vIns)) {
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

	Instruction.prototype.setValue = function(instr, rdt, rs1, rd2imm) {
		this.vIns=instr
		this.vRdt=rdt
		this.vRs1=rs1
		this.vRs2=rd2imm&255
		this.initRegs(0)
	}

	Instruction.prototype.setOpcode = function(opcode) {
		this.vIns=(opcode&4278190080)>>24
		this.vRdt=(opcode&16711680)>>16
		this.vRs1=(opcode&65280)>>8
		this.vRs2=(opcode&255)
		this.initRegs(0)
	}

	Instruction.prototype.$eh5 = function(down, flags, x, y) {
		if (!$g[22]) {
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

	Instruction.prototype.$eh6 = function(down, flags, x, y) {
		if (!$g[22] && down && this.opTypeRdt!=OP_TYPE_UNUSED) {
			if (flags&MB_LEFT) {
				this.vRdt=(this.vRdt==3) ? 0 : this.vRdt+1
			} else
			if (flags&MB_RIGHT)
			this.vRdt=(this.vRdt==0) ? 3 : this.vRdt-1
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh7 = function(down, flags, x, y) {
		if (!$g[22] && down && this.opTypeRdt!=OP_TYPE_UNUSED) {
			if (flags&MB_LEFT) {
				this.vRs1=(this.vRs1==3) ? 0 : this.vRs1+1
			} else
			if (flags&MB_RIGHT)
			this.vRs1=(this.vRs1==0) ? 3 : this.vRs1-1
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh8 = function(down, flags, x, y) {
		if (!$g[22] && down) {
			if (flags&MB_LEFT) {
				if (this.opTypeRs2==OP_TYPE_REG) {
					this.vRs2=(this.vRs2+1)%4
				} else
				if (this.opTypeRs2==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs2=(this.vRs2+1)%256
				}
			} else
			if (flags&MB_RIGHT) {
				if (this.opTypeRs2==OP_TYPE_REG) {
					this.vRs2=(this.vRs2-1)%4
					if (this.vRs2<0)
					this.vRs2=4+this.vRs2
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

	function InstructionMemory(x, y, w, h) {
		VObj.call(this)
		this.ih = (h-4)/32
		this.instruction = newArray(32)
		this.active = 31
		this.r = new Rectangle2($g[0], 0, 0, $g[1], $g[36], x, y, w, h)
		this.r.setRounded(2, 2)
		new Rectangle2($g[0], 0, 0, $g[1], $g[37], x+2, y+2, w-4, h-4)
		for (this.lp1 = 0; this.lp1<32; this.lp1++)
		this.instruction[this.lp1]=new Instruction(x+2, y+2+this.lp1*this.ih, w-4, this.ih, this.lp1*4)
	}
	InstructionMemory.prototype = Object.create(VObj.prototype)

	InstructionMemory.prototype.setValue = function(addr, instr, rdt, rs1, rs2imm) {
		this.instruction[addr/4].setValue(instr, rdt, rs1, rs2imm)
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
		this.vIns = EMPTY, this.vRdt = 0, this.vRs1 = 0, this.vRs2 = 0
		this.nIns = EMPTY, this.nRdt = 0, this.nRs1 = 0, this.nRs2 = 0
		this.txt = "EMPTY"
		this.r1 = new Rectangle2($g[0], 0, 0, $g[1], $g[5], x, y, w, h)
		this.r1.setRounded(2, 2)
		this.r2 = new Rectangle2($g[0], 0, 0, $g[1], $g[12], x+2, y+2, w-4, h-14)
		this.r2.setRounded(2, 2)
		this.r3 = new Rectangle2($g[0], 0, 0, 0, 0, x, y+h-10, w, 10, $g[4], $g[15], caption)
		this.label = new Txt($g[0], $g[17], 0, x+w/2, y+(h-14)/2, 0, $g[15], this.txt)
		this.label.rotate(-90)
	}
	InstructionRegister.prototype = Object.create(VObj.prototype)

	InstructionRegister.prototype.setNewValue = function(instr, rdt, rs1, rs2) {
		this.nIns=instr
		this.nRdt=rdt
		this.nRs1=rs1
		this.nRs2=rs2
	}

	InstructionRegister.prototype.setNewInstruction = function(i) {
		this.nIns=i.vIns
		this.nRdt=i.vRdt
		this.nRs1=i.vRs1
		this.nRs2=i.vRs2
	}

	InstructionRegister.prototype.getNewInstrTxt = function() {
		return instrText(this.nIns, this.nRdt, this.nRs1, this.nRs2)
	}

	InstructionRegister.prototype.setOpacity = function(opacity) {
		this.r1.setOpacity(opacity)
		this.r2.setOpacity(opacity)
		this.r3.setOpacity(opacity)
		this.label.setOpacity(opacity)
	}

	InstructionRegister.prototype.reset = function() {
		this.vIns=EMPTY
		this.vRdt=this.vRs1=this.vRs2=0
		this.nIns=EMPTY
		this.nRdt=this.nRs1=this.nRs2=0
		this.txt=instrText(this.vIns, this.vRdt, this.vRs1, this.vRs2)
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
		this.r1 = new Rectangle2($g[0], 0, 0, $g[1], $g[40], x, y, w, h)
		this.r1.setRounded(2, 2)
		this.bg1 = new Rectangle2($g[0], $g[17], 0, 0, $g[12], this.vx, this.vy, this.vw/2, this.vh)
		this.bg2 = new Rectangle2($g[0], $g[17], 0, 0, $g[12], this.vx+this.vw/2, this.vy, this.vw/2, this.vh)
		if (w>=h) {
			this.vy=y+2
			this.vw=w-14
			this.vh=h-4
			if (labelPos==LEFT) {
				this.r2 = new Rectangle($g[0], 0, 0, 0, 0, x+7-1, y+h/2, -7, -h/2, 14, h, 0, $g[15], caption)
				this.r2.rotate(-90)
				this.vx=x+12
			} else
			if (labelPos==RIGHT) {
				this.r2=new Rectangle($g[0], 0, 0, 0, 0, x+w-7, y+h/2, -7, -h/2, 14, h, 0, $g[15], caption)
				this.r2.rotate(-90)
				this.vx=x+2
			}
		} else {
			this.vx=x+2
			this.vw=w-4
			this.vh=h-14
			if (labelPos==TOP) {
				this.r2=new Rectangle2($g[0], 0, 0, 0, 0, x, y, w, 14, 0, $g[15], caption)
				this.vy=y+12
			} else
			if (labelPos==BOTTOM) {
				this.r2=new Rectangle2($g[0], 0, 0, 0, 0, x, y+h-10, w, 10, 0, $g[15], caption)
				this.vy=y+2
			}
		}
		if (w>=h) {
			this.label=new Rectangle2($g[0], $g[17], 0, 0, $g[13], this.vx, this.vy, this.vw, this.vh, 0, $g[15], "%02X", this.value)
		} else {
			this.label=new Rectangle($g[0], $g[17], 0, 0, $g[13], this.vx+this.vw/2, this.vy+this.vh/2, -this.vw/2, -this.vh/2, this.vw, this.vh, 0, $g[15], "%02X", this.value)
		}
		this.label.setRounded(2, 2)
		this.label.addEventHandler("eventEE", this, this.$eh9)
		this.label.addEventHandler("eventMB", this, this.$eh10)
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

	Register.prototype.$eh9 = function(enter, x, y) {
		if (this.fixed==0)
		this.label.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	Register.prototype.$eh10 = function(down, flags, x, y) {
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
		this.bg = new Rectangle2($g[0], 0, 0, $g[1], $g[42], this.x, this.y, this.w, this.h)
		this.bg.setRounded(2, 2)
		this.label
		if (this.w>=this.h) {
			this.label=new Rectangle2($g[0], 0, 0, 0, 0, this.x, this.y, this.w, this.h, 0, $g[43], caption)
		} else {
			this.label=new Rectangle($g[0], 0, 0, 0, 0, this.x+this.w/2-1, this.y+this.h/2, -this.w/2, -this.h/2, this.w, this.h, 0, $g[43], caption)
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
		this.alu = new Polygon($g[0], 0, ABSOLUTE, $g[1], $g[42], x, y, 0, 0, w, h/4, w, 3*h/4, 0, h, 0, 5*h/8, w/2, h/2, 0, 3*h/8)
		new Rectangle2($g[0], 0, 0, 0, 0, x, y-10, w, 10, 0, $g[43], "ALU")
		this.op = ""
		this.txtOp = new Rectangle($g[0], $g[17], 0, 0, $g[11], x, y+h/2, 0, -h/12, 2*w/3, h/6, $g[4], $g[43], this.op)
		this.txtOp.setOpacity(0)
		this.txtOp.setRounded(2, 2)
		this.txtResult = new Rectangle($g[0], $g[19], 0, $g[1], $g[13], x+3*w/4, y+h/2, 0, -h/12, w/2, h/6, $g[1], $g[43])
		this.txtResult.setOpacity(0)
		this.txtResult.setRounded(2, 2)
	}
	ALU.prototype = Object.create(VObj.prototype)

	ALU.prototype.setTxtOp = function(vIns) {
		this.op=""
		if (vIns==ADD || vIns==ADDi)
		this.op="ADD"
		else 
		if (vIns==SUB || vIns==SUBi)
		this.op="SUB"
		else 
		if (vIns==AND || vIns==ANDi)
		this.op="AND"
		else 
		if (vIns==OR || vIns==ORi)
		this.op="OR"
		else 
		if (vIns==XOR || vIns==XORi)
		this.op="XOR"
		else 
		if (vIns==SLL || vIns==SLLi)
		this.op="SLL"
		else 
		if (vIns==SRL || vIns==SRLi)
		this.op="SRL"
		else 
		if (vIns==SLT || vIns==SLTi)
		this.op="LT"
		else 
		if (vIns==SGT || vIns==SGTi)
		this.op="GT"
		else 
		if (vIns==SLE || vIns==SLEi)
		this.op="LE"
		else 
		if (vIns==SGE || vIns==SGEi)
		this.op="GE"
		else 
		if (vIns==LD || vIns==ST)
		this.op="ADD"
		else 
		if (vIns==JAL || vIns==JALR)
		this.op="ADD"
		this.txtOp.setTxt(this.op)
		this.txtOp.setOpacity(1)
	}

	function AnimPipe() {
		VObj.call(this)
		this.w = 5
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
		this.bgLine = new Line($g[0], $g[18], 0, this.bgPen1, 0, 0)
		this.fgLine = new Line($g[0], $g[19], 0, this.fgPen0, 0, 0)
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
		this.prev_clock = new Line(this, $g[19], 0, $g[44], -this.chw+this.chw/5, 3+this.ch, 0, 0, 0, -this.ch, this.chw, 0, 0, this.ch, this.chw, 0)
		this.next_clock = new Line(this, $g[19], 0, $g[45], this.chw+this.chw/5, 3+this.ch, 0, 0, 0, -this.ch, this.chw, 0, 0, this.ch, this.chw, 0)
		this.dot = new Rectangle2(this, $g[19], 0, 0, $g[5], w/2-3, h-6, 6, 6)
		this.canUpdate
	}
	AnimatedClock.prototype = Object.create(Group.prototype)

	AnimatedClock.prototype.setStall = function(s, t) {
		this.stall=s
		this.type=t
		if (this.canUpdate)
		this.prev_clock.setPen(this.stall ? (this.type ? $g[46] : $g[44]) : $g[45])
	}

	function Button(x, y, w, h, caption, ID) {
		VObj.call(this)
		this.label = new Rectangle2($g[0], 0, 0, $g[1], $g[47], x, y, w, h, $g[1], $g[15], caption)
		this.label.addEventHandler("eventEE", this, this.$eh11)
	}
	Button.prototype = Object.create(VObj.prototype)

	Button.prototype.$eh11 = function(enter, x, y) {
		this.label.setBrush(enter ? $g[48] : $g[47])
		return 0
	}

	Button.prototype.setCaption = function(caption) {
		this.label.setTxt(caption)
	}

	Button.prototype.showLocked = function(locked) {
		this.label.setFont(locked ? $g[16] : $g[15])
	}

	function resetWires() {
		$g[82].reset()
		$g[80].reset()
		$g[81].setOpacity(0)
		$g[83].reset()
		$g[84].reset()
		$g[85].reset()
		$g[86].reset()
		$g[87].reset()
		$g[88].reset()
		$g[89].reset()
		$g[90].reset()
		$g[91].reset()
		$g[92].reset()
		$g[111].reset()
		$g[112].reset()
		$g[113].reset()
		$g[114].reset()
		$g[115].reset()
		$g[116].reset()
		$g[117].setOpacity(0)
		$g[118].reset()
		$g[119].setOpacity(0)
		$g[120].reset()
		$g[121].setOpacity(0)
		$g[122].reset()
		$g[123].setOpacity(0)
		$g[125].reset()
		$g[124].reset()
		$g[127].reset()
		$g[128].reset()
		$g[129].setOpacity(0)
		$g[130].reset()
		$g[131].setOpacity(0)
		$g[126].setOpacity(0)
		$g[104].setPen($g[101])
		$g[105].setPen($g[101])
		$g[106].setPen($g[101])
		$g[107].setPen($g[101])
		$g[108].setPen($g[101])
		$g[139].reset()
		$g[140].reset()
		$g[141].reset()
		$g[142].reset()
		$g[143].reset()
		$g[144].reset()
		$g[145].setOpacity(0)
		$g[146].reset()
		$g[147].reset()
		$g[148].reset()
		$g[149].reset()
		$g[150].reset()
		$g[151].reset()
		$g[152].reset()
		$g[153].reset()
		$g[138].txtOp.setOpacity(0)
		$g[138].txtResult.setOpacity(0)
		$g[159].reset()
		$g[160].reset()
		$g[161].reset()
		$g[162].reset()
		$g[163].reset()
		$g[164].reset()
		$g[167].reset()
	}

	function resetRegisters() {
		$g[73].reset()
		$g[73].setValue(124)
		$g[94].reset()
		$g[133].reset()
		$g[134].reset()
		$g[156].reset()
		$g[155].reset()
		$g[166].reset()
		$g[75][0].reset()
		$g[75][1].reset()
		$g[76][0].reset()
		$g[76][1].reset()
		$g[93].reset()
		$g[132].reset()
		$g[154].reset()
		$g[165].reset()
		$g[71].setActive(124)
		$g[155].setInvalid(1)
		$g[155].updateLabel()
		$g[166].setInvalid(1)
		$g[166].updateLabel()
		$g[75][0].setValue(-1)
		$g[75][0].setInvalid(1)
		$g[75][0].updateLabel()
		$g[75][1].setValue(-1)
		$g[75][1].setInvalid(1)
		$g[75][1].updateLabel()
		$g[33]=0
		$g[34]=0
		$g[68].setTxt("%4d", 0)
		$g[69].setTxt("%4d", 0)
	}

	function resetCircuit() {
		resetRegisters()
		resetWires()
	}

	function showBTB(opacity) {
		$g[74].setOpacity(opacity)
		$g[75][0].setOpacity(opacity)
		$g[75][1].setOpacity(opacity)
		$g[76][0].setOpacity(opacity)
		$g[76][1].setOpacity(opacity)
		$g[88].setOpacity(opacity)
		$g[111].setOpacity(opacity)
		$g[77].setOpacity(opacity)
		$g[91].setOpacity(opacity)
		$g[84].setOpacity(opacity)
		$g[122].setOpacity(opacity)
		$g[125].setOpacity(opacity)
		$g[99].setOpacity(opacity)
		$g[124].setOpacity(opacity)
	}

	function showALUForwarding(opacity) {
		if (opacity==0) {
			$g[142].setPoint(0, 926, 205)
			$g[142].setPoint(1, 481, 205)
			$g[143].setPoint(0, ($g[29]) ? 420 : 1109, 551)
			$g[143].setPoint(1, 470, 250)
			$g[144].setPoint(2, 430, 260)
			$g[144].setPoint(3, 470, 260)
			$g[142].setHead(0)
		} else {
			$g[142].setPoint(0, 926, 220)
			$g[142].setPoint(1, 470, 220)
			$g[143].setPoint(0, 926, 240)
			$g[143].setPoint(1, 470, 240)
			$g[144].setPoint(2, 430, 250)
			$g[144].setPoint(3, 470, 250)
			$g[142].setHead(1)
		}
		$g[135].setOpacity(opacity)
		$g[140].setOpacity(opacity)
		$g[141].setOpacity(opacity)
		$g[147].setOpacity(opacity)
		$g[146].setOpacity(opacity)
	}

	function showSMDRForwarding(opacity) {
		if (opacity==0) {
			$g[150].setPoint(1, 410, 330)
			$g[150].setPoint(2, 480, 330)
			$g[150].setHead(0)
		} else {
			$g[150].setPoint(1, 410, 340)
			$g[150].setPoint(2, 470, 340)
			$g[150].setHead(1)
		}
		$g[137].setOpacity(opacity)
		$g[148].setOpacity(opacity)
		$g[149].setOpacity(opacity)
	}

	function showZeroForwarding(opacity) {
		if (opacity==0) {
			$g[107].setPt(1, 355, 135)
			$g[107].setPt(2, 355, 160)
		} else {
			$g[107].setPt(1, 345, 135)
			$g[107].setPt(2, 345, 160)
		}
		$g[109].setOpacity(opacity)
		$g[110].setOpacity(opacity)
		$g[104].setOpacity(opacity)
		$g[105].setOpacity(opacity)
		$g[106].setOpacity(opacity)
	}

	function showPipeline(opacity) {
		if (opacity==0) {
			$g[90].setPoint(1, 260, 230)
			$g[90].setPoint(2, 260, 240)
			$g[113].setPoint(0, 573, 230)
			$g[114].setPoint(0, 573, 230)
			$g[92].setPoint(1, 420, 390)
			$g[130].setPoint(1, 370, 205)
			$g[130].setPoint(2, 420, 205)
			$g[127].setPoint(1, 410, 250)
			$g[150].setPoint(0, 904, 250)
			$g[152].setPoint(3, 580, 230)
			$g[153].setPoint(3, 580, 230)
			$g[151].setPoint(1, 590, 330)
			$g[161].setPoint(1, 680, 230)
			$g[92].setHead(0)
			$g[90].setHead(0)
			$g[130].setHead(0)
			$g[142].setHead(0)
			$g[127].setHead(0)
			$g[150].setHead(0)
			$g[151].setHead(0)
			$g[152].setHead(0)
			$g[153].setHead(0)
			$g[161].setHead(0)
			showBTB(opacity)
			showALUForwarding(opacity)
			showSMDRForwarding(opacity)
			showZeroForwarding(opacity)
		} else {
			$g[90].setPoint(1, 240, 230)
			$g[90].setPoint(2, 250, 230)
			$g[113].setPoint(0, 573, 250)
			$g[114].setPoint(0, 573, 250)
			$g[92].setPoint(1, 400, 390)
			$g[130].setPoint(1, 370, 210)
			$g[130].setPoint(2, 400, 210)
			$g[127].setPoint(1, 400, 250)
			$g[150].setPoint(0, 904, 270)
			$g[152].setPoint(3, 560, 230)
			$g[153].setPoint(3, 560, 230)
			$g[151].setPoint(1, 550, 330)
			$g[161].setPoint(1, 660, 230)
			$g[92].setHead(1)
			$g[90].setHead(1)
			$g[130].setHead(1)
			$g[142].setHead(1)
			$g[127].setHead(1)
			$g[150].setHead(1)
			$g[151].setHead(1)
			$g[152].setHead(1)
			$g[153].setHead(1)
			$g[161].setHead(1)
			showBTB($g[27]==BRANCH_PREDICTION ? 1 : 0)
			showALUForwarding($g[29]==ALU_FORWARDING ? 1 : 0)
			showSMDRForwarding($g[30]==FORWARDING_TO_SMDR ? 1 : 0)
			showZeroForwarding($g[31]==ZERO_FORWARDING ? 1 : 0)
		}
		$g[89].setOpacity(opacity)
		$g[79].setOpacity(opacity)
		$g[86].setOpacity(opacity)
		$g[94].setOpacity(opacity)
		$g[132].setOpacity(opacity)
		$g[154].setOpacity(opacity)
		$g[165].setOpacity(opacity)
		$g[139].setOpacity(opacity)
		$g[159].setOpacity(opacity)
		$g[133].setOpacity(opacity)
		$g[134].setOpacity(opacity)
		$g[155].setOpacity(opacity)
		$g[166].setOpacity(opacity)
		$g[156].setOpacity(opacity)
		$g[61].label.setOpacity(opacity)
		$g[62].label.setOpacity(opacity)
		$g[63].label.setOpacity(opacity)
		$g[64].label.setOpacity(opacity)
		$g[65].label.setOpacity(opacity)
	}

	function setPEMode(mode) {
		$g[26]=mode
		if ($g[26]==0) {
			$g[60].setCaption("Pipelining Enabled")
			showPipeline(1)
		} else
		if ($g[26]==1) {
			$g[60].setCaption("Pipelining Disabled")
			showPipeline(0)
		}
		setArg("peMode", $g[26].toString())
	}

	function setBPMode(mode) {
		$g[27]=mode
		if ($g[27]==0) {
			$g[61].setCaption("Branch Prediction")
			showBTB(1)
		} else
		if ($g[27]==1) {
			$g[61].setCaption("Branch Interlock")
			showBTB(0)
		} else
		if ($g[27]==2) {
			$g[61].setCaption("Delayed Branches")
			showBTB(0)
		}
		setArg("bpMode", $g[27].toString())
	}

	function setLIMode(mode) {
		$g[28]=mode
		if ($g[28]==0) {
			$g[62].setCaption("Load Interlock")
		} else
		if ($g[28]==1) {
			$g[62].setCaption("No Load Interlock")
		}
		setArg("liMode", $g[28].toString())
	}

	function setAFMode(mode) {
		$g[29]=mode
		if ($g[29]==0) {
			$g[63].setCaption("ALU Forwarding")
			showALUForwarding(1)
		} else
		if ($g[29]==1) {
			$g[63].setCaption("ALU Interlock")
			showALUForwarding(0)
		} else
		if ($g[29]==2) {
			$g[63].setCaption("No ALU Interlock")
			showALUForwarding(0)
		}
		setArg("afMode", $g[29].toString())
	}

	function setSFMode(mode) {
		$g[30]=mode
		if ($g[30]==0) {
			$g[64].setCaption("Store Operand\nForwarding")
			showSMDRForwarding(1)
		} else
		if ($g[30]==1) {
			$g[64].setCaption("Store Interlock")
			showSMDRForwarding(0)
		} else
		if ($g[30]==2) {
			$g[64].setCaption("No Store Interlock")
			showSMDRForwarding(0)
		}
		setArg("sfMode", $g[30].toString())
	}

	function setZFMode(mode) {
		$g[31]=mode
		if ($g[31]==0) {
			$g[65].setCaption("Zero Forwarding")
			showZeroForwarding(1)
		} else
		if ($g[31]==1) {
			$g[65].setCaption("Zero Interlock")
			showZeroForwarding(0)
		} else
		if ($g[31]==2) {
			$g[65].setCaption("No Zero Interlock")
			showZeroForwarding(0)
		}
		setArg("zfMode", $g[31].toString())
	}

	function $eh12(enter, x, y) {
		$g[176].setBrush(enter ? $g[9] : $g[13])
	}

	function $eh13(down, flags, x, y) {
		if (down && (flags&MB_LEFT)) {
			setArg("help", "0")
			$g[20].setOpacity(0)
		}
		return 0
	}

	function btbIndex(pc) {
		for (let lp1 = 0; lp1<2; lp1++)
		if ($g[75][lp1].value==pc)
		return lp1
		return -1
	}

	function calcNewPC() {
		if (instrIsBranch($g[93].vIns)) {
			let pen = $g[102]
			if ($g[31]==ZERO_FORWARDING) {
				if (($g[132].vRdt==$g[93].vRs1) && (instrOpTypeRdt($g[132].vIns)==OP_TYPE_REG) && instrIsLoadOrStore($g[132].vIns)==0) {
					$g[104].setPen(pen)
					$g[180]=$g[155].newValue
				} else
				if ($g[155].tagMatches($g[93].vRs1)) {
					$g[105].setPen(pen)
					$g[180]=$g[155].value
				} else {
					$g[177]=$g[83]
					$g[107].setPen(pen)
					$g[180]=$g[95][$g[93].vRs1].value
					$g[131].setTxt("R%d:%02X", $g[93].vRs1, $g[180])
					$g[131].setOpacity(1)
					fork(37, $g[130], 24)
				}
			} else {
				$g[107].setPen(pen)
				$g[180]=$g[95][$g[93].vRs1].value
			}
			$g[108].setPen(pen)
			if (($g[93].vIns==BEQZ)==($g[180]==0)) {
				$g[178]=$g[120]
				$g[181]=($g[94].value+$g[93].vRs2)&127
			} else {
				$g[178]=$g[118]
				$g[181]=($g[94].value+4)&127
			}
			$g[182]=$g[83]
			$g[179]=$g[122]
		} else
		if (isJorJAL($g[93].vIns)) {
			$g[178]=$g[120]
			$g[179]=$g[122]
			$g[181]=($g[94].value+$g[93].vRs2)&127
			$g[182]=$g[83]
		} else
		if (instrIsJumpR($g[93].vIns)) {
			$g[181]=($g[95][$g[93].vRs2].value)&127
			$g[182]=$g[85]
			$g[179]=$g[125]
		}
	}

	function updBTB() {
		if ($g[181]!=$g[73].value) {
			$g[73].setNewValue($g[181])
			$g[177]=$g[182]
			if ($g[27]==BRANCH_PREDICTION) {
				if ($g[181]==$g[94].value+4) {
					if (btbIndex($g[94].value)>=0)
					$g[75][btbIndex($g[94].value)].setInvalid(1)
				} else {
					if (btbIndex($g[94].value)>=0)
					$g[24]=btbIndex($g[94].value)
					else 
					$g[24]=($g[24]) ? 0 : 1
					$g[75][$g[24]].setNewValue($g[94].value)
					$g[75][$g[24]].setInvalid(0)
					$g[75][$g[24]].useTag=0
					$g[76][$g[24]].setNewValue($g[181])
				}
			}
		}
	}

	function detectStall() {
		$g[23]=NO_STALL
		$g[25]=0
		if ($g[29]==ALU_INTERLOCK) {
			if (instrOpTypeRdt($g[132].vIns)==OP_TYPE_REG) {
				if ((instrOpTypeRs1($g[93].vIns)==OP_TYPE_REG) && ($g[93].vRs1==$g[132].vRdt))
				$g[23]=DATA_STALL
				if ((instrOpTypeRs2($g[93].vIns)==OP_TYPE_REG) && ($g[93].vRs2==$g[132].vRdt))
				$g[23]=DATA_STALL
			}
			if (instrOpTypeRdt($g[154].vIns)==OP_TYPE_REG) {
				if ((instrOpTypeRs1($g[93].vIns)==OP_TYPE_REG) && ($g[93].vRs1==$g[154].vRdt))
				$g[23]=DATA_STALL
				if ((instrOpTypeRs2($g[93].vIns)==OP_TYPE_REG) && ($g[93].vRs2==$g[154].vRdt))
				$g[23]=DATA_STALL
			}
		}
		if (($g[30]==STORE_INTERLOCK) && ($g[93].vIns==ST)) {
			if ((instrOpTypeRdt($g[132].vIns)==OP_TYPE_REG) && ($g[132].vRdt==$g[93].vRdt))
			$g[23]=DATA_STALL
			if ((instrOpTypeRdt($g[154].vIns)==OP_TYPE_REG) && ($g[154].vRdt==$g[93].vRdt))
			$g[23]=DATA_STALL
		}
		if (($g[31]==ZERO_INTERLOCK) && instrIsBranch($g[93].vIns)) {
			if ((instrOpTypeRdt($g[132].vIns)==OP_TYPE_REG) && ($g[132].vRdt==$g[93].vRs1))
			$g[23]=DATA_STALL
			if ((instrOpTypeRdt($g[154].vIns)==OP_TYPE_REG) && ($g[154].vRdt==$g[93].vRs1))
			$g[23]=DATA_STALL
		}
		if (instrIsJumpR($g[93].vIns)) {
			if ((instrOpTypeRdt($g[132].vIns)==OP_TYPE_REG) && ($g[132].vRdt==$g[93].vRs2))
			$g[23]=DATA_STALL
			if ((instrOpTypeRdt($g[154].vIns)==OP_TYPE_REG) && ($g[154].vRdt==$g[93].vRs2))
			$g[23]=DATA_STALL
		}
		if (($g[28]==LOAD_INTERLOCK) && ($g[132].vIns==LD)) {
			if ((instrOpTypeRs1($g[93].vIns)==OP_TYPE_REG) && ($g[93].vRs1==$g[132].vRdt))
			$g[23]=DATA_STALL
			if ((instrOpTypeRs2($g[93].vIns)==OP_TYPE_REG) && ($g[93].vRs2==$g[132].vRdt))
			$g[23]=DATA_STALL
		}
		if (($g[23]==NO_STALL) && ($g[27]!=DELAYED_BRANCHES) && instrIsBranchOrJump($g[93].vIns) && ($g[181]!=$g[73].value)) {
			$g[25]=1
			$g[23]=CTRL_STALL
		}
		if ($g[23]==DATA_STALL) {
			$g[72].setStall(1, 0)
		} else
		if ($g[23]==CTRL_STALL) {
			$g[72].setStall(1, 1)
		}
	}

	function setlocked() {
		let b_locked = $g[32] || $g[22]
		$g[60].showLocked(b_locked)
		$g[61].showLocked(b_locked)
		$g[62].showLocked(b_locked)
		$g[63].showLocked(b_locked)
		$g[64].showLocked(b_locked)
		$g[65].showLocked(b_locked)
	}

	function $eh14(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setPEMode(($g[26]+1)%2)
			resetCircuit()
		}
		return 0
	}

	function $eh15(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setBPMode(($g[27]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh16(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setLIMode(($g[28]+1)%2)
			resetCircuit()
		}
		return 0
	}

	function $eh17(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setAFMode(($g[29]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh18(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setSFMode(($g[30]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh19(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setZFMode(($g[31]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh20(down, flags, x, y) {
		if (down && (flags&MB_LEFT)) {
			let lp1, opcode, reg
			let instr
			let s = "saveanim.php?state="
			for (lp1=0; lp1<32; lp1++) {
				instr=$g[71].instruction[lp1]
				opcode=(instr.vIns<<24)|(instr.vRdt<<16)|(instr.vRs1<<8)|(instr.vRs2)
				s=sprintf("%si%d='0x%08X' ", s, lp1, opcode)
			}
			for (lp1=0; lp1<4; lp1++) {
				reg=$g[95][lp1].value
				s=sprintf("%sr%d='0x%02X' ", s, lp1, reg)
			}
			for (lp1=0; lp1<4; lp1++) {
				reg=$g[157][lp1].value
				s=sprintf("%sm%d='0x%02X' ", s, lp1, reg)
			}
			s=sprintf("%speMode='%d' bpMode='%d' liMode='%d' afMode='%d' sfMode='%d' zfMode='%d'", s, $g[26], $g[27], $g[28], $g[29], $g[30], $g[31])
			getURL(s)
		}
		return 0
	}

	function $eh21(down, flags, x, y) {
		if (down && (flags&MB_LEFT))
		getURL("https://www.scss.tcd.ie/Jeremy.Jones/VivioJS/vivio.htm")
		return 0
	}

	function $eh22(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT))
		getURL("showanim.php")
	}

	function $eh23(enter, x, y) {
		$g[70].setBrush(enter ? $g[8] : $g[12])
		$g[70].setTxtPen(enter ? $g[3] : $g[1])
		return 0
	}

	function $eh24(down, flags, x, y) {
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
				$g[15] = new Font("Calibri", 8)
				$g[16] = new Font("Calibri", 8, STRIKETHROUGH)
				$g[17] = new Layer(1, 3)
				$g[18] = new Layer(2, 3)
				$g[19] = new Layer(3, 0)
				$g[20] = new Layer(5, 0)
				$g[21] = new SolidBrush(RED)
				$g[22] = 0
				$g[23] = NO_STALL
				$g[24] = 1
				$g[25] = 0
				$g[26] = 0
				$g[27] = 0
				$g[28] = 0
				$g[29] = 0
				$g[30] = 0
				$g[31] = 0
				$g[32] = 0
				$g[33] = 0
				$g[34] = 0
				$g[35] = newArray(34)
				$g[35][NOP]="NOP"
				$g[35][ADD]="ADD"
				$g[35][SUB]="SUB"
				$g[35][AND]="AND"
				$g[35][OR]="OR"
				$g[35][XOR]="XOR"
				$g[35][SLL]="SLL"
				$g[35][SRL]="SRL"
				$g[35][SLT]="SLT"
				$g[35][SGT]="SGT"
				$g[35][SLE]="SLE"
				$g[35][SGE]="SGE"
				$g[35][ADDi]="ADDi"
				$g[35][SUBi]="SUBi"
				$g[35][ANDi]="ANDi"
				$g[35][ORi]="ORi"
				$g[35][XORi]="XORi"
				$g[35][SLLi]="SLLi"
				$g[35][SRLi]="SRLi"
				$g[35][SLTi]="SLTi"
				$g[35][SGTi]="SGTi"
				$g[35][SLEi]="SLEi"
				$g[35][SGEi]="SGEi"
				$g[35][LD]="LD"
				$g[35][ST]="ST"
				$g[35][BEQZ]="BEQZ"
				$g[35][BNEZ]="BNEZ"
				$g[35][J]="J"
				$g[35][JAL]="JAL"
				$g[35][JR]="JR"
				$g[35][JALR]="JALR"
				$g[35][HALT]="HALT"
				$g[35][STALL]="STALL"
				$g[35][EMPTY]="EMPTY"
				$g[36] = new SolidBrush(BORDEAU)
				$g[37] = new SolidBrush(WHITE)
				$g[38] = new SolidPen(DOT, 1, rgba(0.75, 0.75, 0.75))
				$g[39] = new SolidPen(SOLID, 1, RED, ARROW60_END)
				$g[40] = new SolidBrush(PURPLE)
				$g[41] = new SolidBrush(WHITE)
				$g[42] = new SolidBrush(LIGHT_BLUE)
				$g[43] = new Font("Calibri", 9)
				$g[44] = new SolidPen(SOLID, 1, RED, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[45] = new SolidPen(SOLID, 1, GREEN, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[46] = new SolidPen(SOLID, 1, ORANGE, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[47] = new SolidBrush(WHITE)
				$g[48] = new SolidBrush(GRAY224)
				$g[49] = getArg("name", "")
				if (!($g[49]!="")) {
					$pc = 1
					continue
				}
				$g[49]=sprintf(":  %s", $g[49])
				$pc = 1
			case 1:
				$g[50] = new Font("Calibri", 20, SMALLCAPS|ITALIC)
				$g[51] = new Rectangle2($g[0], 0, HLEFT, 0, new SolidBrush(DARK_BLUE), 27, 22, 811, 66, $g[4], $g[50], sprintf(" MIPS Animation %s", $g[49]))
				$g[52] = new SolidPen(DASH, 1, DARK_BLUE, ROUND_START|ROUND_JOIN|ROUND_END)
				new Line2($g[0], 0, ABSOLUTE, $g[52], 325, 176, 1893, 176)
				new Line2($g[0], 0, ABSOLUTE, $g[52], 325, 970, 1893, 970)
				new Line2($g[0], 0, ABSOLUTE, $g[52], 325, 176, 325, 970)
				$g[53] = new Line2($g[0], 0, ABSOLUTE, $g[52], 649, 176, 649, 970)
				$g[54] = new Line2($g[0], 0, ABSOLUTE, $g[52], 1055, 176, 1055, 970)
				$g[55] = new Line2($g[0], 0, ABSOLUTE, $g[52], 1460, 176, 1460, 970)
				$g[56] = new Line2($g[0], 0, ABSOLUTE, $g[52], 1758, 176, 1758, 970)
				new Line2($g[0], 0, ABSOLUTE, $g[52], 1893, 176, 1893, 970)
				$g[57] = new SolidPen(DOT, THIN, BLACK)
				new Line2($g[0], 0, ABSOLUTE, $g[57], 27, 992, 1893, 992)
				$g[58] = new Font("Calibri", 10, BOLD)
				$g[59] = new Button(54, 1014, 216, 44, "Save Configuration", BUTTON_SP)
				$g[60] = new Button(325, 1014, 216, 44, "Pipelining Enabled", BUTTON_PE)
				$g[61] = new Button(568, 1014, 216, 44, "Branch Prediction", BUTTON_BP)
				$g[62] = new Button(811, 1014, 216, 44, "Load Interlock", BUTTON_LI)
				$g[63] = new Button(1055, 1014, 216, 44, "ALU Forwarding", BUTTON_AF)
				$g[64] = new Button(1298, 1014, 216, 44, "Store Operand\nForwarding", BUTTON_SF)
				$g[65] = new Button(1541, 1014, 216, 44, "Zero Forwarding", BUTTON_ZF)
				$g[66] = new Image($g[0], 0, 0, 0, "vivio.png", 660, 1244, 0, 0, LOGOW, LOGOH)
				new Txt($g[0], 0, HLEFT|VTOP, 27, 101, $g[2], $g[15], "instructions executed:")
				$g[67] = new Txt($g[0], 0, HLEFT|VTOP, 27, 123, $g[2], $g[15], "ticks:")
				$g[68] = new Txt($g[0], 0, HLEFT|VTOP, 243, 101, $g[3], $g[15], "0")
				$g[69] = new Txt($g[0], 0, HLEFT|VTOP, 243, 123, $g[3], $g[15], "0")
				$g[70] = new Rectangle2($g[0], 0, 0, 0, 0, 27, 150, 270, 22, 0, $g[15], "Instruction Cache")
				$g[71] = new InstructionMemory(27, 176, 270, 705)
				$g[72] = new AnimatedClock($g[0], 54, 904, 216, 66)
				$g[73] = new Register(541, 463, 54, 88, TOP, "PC")
				$g[74] = new Rectangle2($g[0], 0, 0, 0, 0, 406, 187, 216, 22, 0, $g[15], "Branch Target Buffer")
				$g[75] = newArray(2)
				$g[75][0]=new Register(406, 220, 108, 44, LEFT, "PC")
				$g[75][1]=new Register(406, 264, 108, 44, LEFT, "PC")
				$g[76] = newArray(2)
				$g[76][0]=new Register(514, 220, 108, 44, RIGHT, "PPC")
				$g[76][1]=new Register(514, 264, 108, 44, RIGHT, "PPC")
				$g[77] = new Component(541, 375, 81, 22, "mux 2")
				$g[78] = new Component(460, 452, 27, 110, "mux 1")
				$g[79] = new Component(433, 595, 54, 22, "+4")
				$g[80] = new AnimPipe()
				$g[80].addPoint(297, 860)
				$g[80].addPoint(676, 860)
				$g[81] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 180, 390, -30, -6, 60, 12, $g[4], $g[15])
				$g[81].setRounded(2, 2)
				$g[82] = new AnimPipe()
				$g[82].addPoint(568, 551)
				$g[82].addPoint(568, 705)
				$g[82].addPoint(297, 705)
				$g[83] = new AnimPipe()
				$g[83].addPoint(811, 375)
				$g[83].addPoint(811, 353)
				$g[83].addPoint(406, 353)
				$g[83].addPoint(406, 474)
				$g[83].addPoint(460, 474)
				$g[84] = new AnimPipe()
				$g[84].addPoint(406, 264)
				$g[84].addPoint(379, 264)
				$g[84].addPoint(379, 496)
				$g[84].addPoint(460, 496)
				$g[85] = new AnimPipe()
				$g[85].addPoint(852, 110)
				$g[85].addPoint(352, 110)
				$g[85].addPoint(352, 518)
				$g[85].addPoint(460, 518)
				$g[86] = new AnimPipe()
				$g[86].addPoint(433, 606)
				$g[86].addPoint(406, 606)
				$g[86].addPoint(406, 540)
				$g[86].addPoint(460, 540)
				$g[87] = new AnimPipe()
				$g[87].addPoint(487, 507)
				$g[87].addPoint(541, 507)
				$g[88] = new AnimPipe()
				$g[88].addPoint(568, 463)
				$g[88].addPoint(568, 397)
				$g[89] = new AnimPipe()
				$g[89].addPoint(568, 551)
				$g[89].addPoint(568, 606)
				$g[89].addPoint(487, 606)
				$g[90] = new AnimPipe()
				$g[90].addPoint(595, 507)
				$g[90].addPoint(649, 507)
				$g[90].addPoint(676, 507)
				$g[91] = new AnimPipe()
				$g[91].addPoint(581, 375)
				$g[91].addPoint(581, 309)
				$g[92] = new AnimPipe()
				$g[92].addPoint(730, 860)
				$g[92].addPoint(1082, 860)
				$g[93] = new InstructionRegister(676, 771, 54, 187, "ID")
				$g[94] = new Register(676, 463, 54, 88, TOP, "PC1")
				new Txt($g[0], 0, HLEFT|VTOP, 1082, 88, 0, $g[15], "Register\nFile")
				$g[95] = newArray(4)
				$g[95][0]=new Register(852, 66, 108, 44, LEFT, "R0")
				$g[95][0].setFixed()
				$g[95][1]=new Register(852, 110, 108, 44, LEFT, "R1")
				$g[95][2]=new Register(960, 66, 108, 44, RIGHT, "R2")
				$g[95][3]=new Register(960, 110, 108, 44, RIGHT, "R3")
				$g[96] = new Component(744, 375, 135, 22, "mux 3")
				$g[97] = new Component(730, 595, 81, 22, "ADD4")
				$g[98] = new Component(811, 595, 81, 22, "ADDi")
				$g[99] = new Component(676, 220, 27, 88, "mux 4")
				$g[100] = new Component(1001, 518, 27, 66, "mux 5")
				new Rectangle2($g[0], 0, 0, 0, 0, 757, 661, 54, 22, 0, $g[15], "4")
				$g[101] = new SolidPen(SOLID, 0, PURPLE, ARROW60_END)
				$g[102] = new SolidPen(SOLID, 2, RED, ARROW60_END)
				$g[103] = new SolidPen(SOLID, MEDIUM, BLACK)
				$g[104] = new Line2($g[0], $g[17], ABSOLUTE, $g[101], 548, 622, 1208, 406, 804, 406, 804, 160)
				$g[105] = new Line2($g[0], $g[17], ABSOLUTE, $g[101], 646, 622, 1424, 392, 793, 392, 793, 160)
				$g[106] = new Line2($g[0], $g[17], ABSOLUTE, $g[101], 690, 379, 782, 379, 782, 160)
				$g[107] = new Line($g[0], $g[17], ABSOLUTE, $g[101], 0, 0, 816, 365, 760, 365, 760, 160)
				$g[108] = new Line2($g[0], $g[17], ABSOLUTE, $g[101], 355, 433, 782, 473, 716, 175)
				$g[109] = new Line2($g[0], $g[17], ABSOLUTE, $g[103], 930, 353, 990, 353)
				$g[110] = new Txt($g[0], $g[17], HLEFT|VTOP, 936, 357, 0, $g[15], "zero")
				$g[111] = new AnimPipe()
				$g[111].addPoint(703, 463)
				$g[111].addPoint(703, 441)
				$g[111].addPoint(595, 441)
				$g[111].addPoint(595, 397)
				$g[112] = new AnimPipe()
				$g[112].addPoint(771, 595)
				$g[112].addPoint(771, 562)
				$g[112].addPoint(1001, 562)
				$g[113] = new AnimPipe()
				$g[113].addPoint(703, 551)
				$g[113].addPoint(703, 705)
				$g[113].addPoint(757, 705)
				$g[113].addPoint(757, 617)
				$g[114] = new AnimPipe()
				$g[114].addPoint(703, 551)
				$g[114].addPoint(703, 705)
				$g[114].addPoint(838, 705)
				$g[114].addPoint(838, 617)
				$g[115] = new AnimPipe()
				$g[115].addPoint(784, 661)
				$g[115].addPoint(784, 617)
				$g[116] = new AnimPipe()
				$g[116].addPoint(730, 860)
				$g[116].addPoint(865, 860)
				$g[116].addPoint(865, 617)
				$g[117] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 320, 376, -12, -6, 24, 12, $g[4], $g[15])
				$g[117].setRounded(2, 2)
				$g[118] = new AnimPipe()
				$g[118].addPoint(771, 595)
				$g[118].addPoint(771, 397)
				$g[119] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 285, 200, -12, -6, 24, 12, $g[4], $g[15])
				$g[119].setRounded(2, 2)
				$g[120] = new AnimPipe()
				$g[120].addPoint(852, 595)
				$g[120].addPoint(852, 397)
				$g[121] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 315, 200, -12, -6, 24, 12, $g[4], $g[15])
				$g[121].setRounded(2, 2)
				$g[122] = new AnimPipe()
				$g[122].addPoint(811, 375)
				$g[122].addPoint(811, 287)
				$g[122].addPoint(703, 287)
				$g[123] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 300, 160, -12, -6, 24, 12, $g[4], $g[15])
				$g[123].setRounded(2, 2)
				$g[124] = new AnimPipe()
				$g[124].addPoint(676, 264)
				$g[124].addPoint(622, 264)
				$g[125] = new AnimPipe()
				$g[125].addPoint(852, 110)
				$g[125].addPoint(811, 110)
				$g[125].addPoint(811, 242)
				$g[125].addPoint(703, 242)
				$g[126] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 300, 44, -12, 0, 53, 12, $g[4], $g[15])
				$g[127] = new AnimPipe()
				$g[127].addPoint(1028, 551)
				$g[127].addPoint(1082, 551)
				$g[128] = new AnimPipe()
				$g[128].addPoint(919, 154)
				$g[128].addPoint(919, 540)
				$g[128].addPoint(1001, 540)
				$g[129] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 340, 82, -12, 0, 53, 12, $g[4], $g[15], "R0:0")
				$g[129].setRounded(2, 2)
				$g[130] = new AnimPipe()
				$g[130].addPoint(1001, 154)
				$g[130].addPoint(1001, 463)
				$g[130].addPoint(1082, 463)
				$g[131] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 370, 82, -12, 0, 53, 12, $g[4], $g[15], "R0:0")
				$g[131].setRounded(2, 2)
				$g[132] = new InstructionRegister(1082, 771, 54, 187, "EX")
				$g[133] = new Register(1082, 419, 54, 88, TOP, "A")
				$g[134] = new Register(1082, 507, 54, 88, BOTTOM, "B")
				$g[135] = new Component(1271, 397, 27, 110, "mux 6")
				$g[136] = new Component(1271, 507, 27, 110, "mux 7")
				$g[137] = new Component(1271, 683, 27, 88, "mux 8")
				$g[138] = new ALU(1325, 419, 108, 176)
				$g[139] = new AnimPipe()
				$g[139].addPoint(1136, 860)
				$g[139].addPoint(1514, 860)
				$g[140] = new AnimPipe()
				$g[140].addPoint(1541, 463)
				$g[140].addPoint(1541, 375)
				$g[140].addPoint(1217, 375)
				$g[140].addPoint(1217, 419)
				$g[140].addPoint(1271, 419)
				$g[141] = new AnimPipe()
				$g[141].addPoint(1812, 463)
				$g[141].addPoint(1812, 353)
				$g[141].addPoint(1190, 353)
				$g[141].addPoint(1190, 441)
				$g[141].addPoint(1271, 441)
				$g[142] = new AnimPipe()
				$g[142].addPoint(1136, 485)
				$g[142].addPoint(1271, 485)
				$g[143] = new AnimPipe()
				$g[143].addPoint(1136, 529)
				$g[143].addPoint(1271, 529)
				$g[144] = new AnimPipe()
				$g[144].addPoint(1136, 860)
				$g[144].addPoint(1163, 860)
				$g[144].addPoint(1163, 551)
				$g[144].addPoint(1271, 551)
				$g[145] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 432, 370, -10, 0, 44, 12, $g[4], $g[15], "IMM")
				$g[145].setRounded(2, 2)
				$g[146] = new AnimPipe()
				$g[146].addPoint(1812, 551)
				$g[146].addPoint(1812, 661)
				$g[146].addPoint(1190, 661)
				$g[146].addPoint(1190, 573)
				$g[146].addPoint(1271, 573)
				$g[147] = new AnimPipe()
				$g[147].addPoint(1541, 551)
				$g[147].addPoint(1541, 639)
				$g[147].addPoint(1217, 639)
				$g[147].addPoint(1217, 595)
				$g[147].addPoint(1271, 595)
				$g[148] = new AnimPipe()
				$g[148].addPoint(1541, 551)
				$g[148].addPoint(1541, 639)
				$g[148].addPoint(1217, 639)
				$g[148].addPoint(1217, 705)
				$g[148].addPoint(1271, 705)
				$g[149] = new AnimPipe()
				$g[149].addPoint(1812, 551)
				$g[149].addPoint(1812, 661)
				$g[149].addPoint(1190, 661)
				$g[149].addPoint(1190, 727)
				$g[149].addPoint(1271, 727)
				$g[150] = new AnimPipe()
				$g[150].addPoint(1109, 595)
				$g[150].addPoint(1109, 749)
				$g[150].addPoint(1271, 749)
				$g[151] = new AnimPipe()
				$g[151].addPoint(1298, 727)
				$g[151].addPoint(1487, 727)
				$g[152] = new AnimPipe()
				$g[152].addPoint(1298, 452)
				$g[152].addPoint(1325, 452)
				$g[152].addPoint(1460, 507)
				$g[152].addPoint(1514, 507)
				$g[153] = new AnimPipe()
				$g[153].addPoint(1298, 562)
				$g[153].addPoint(1325, 562)
				$g[153].addPoint(1460, 507)
				$g[153].addPoint(1514, 507)
				$g[154] = new InstructionRegister(1514, 771, 54, 187, "MA")
				$g[155] = new Register(1514, 463, 54, 88, TOP, "O0")
				$g[156] = new Register(1487, 705, 108, 44, RIGHT, "SMR")
				new Txt($g[0], $g[17], HLEFT|VTOP, 1495, 220, 0, $g[15], "memory\naddress")
				new Txt($g[0], $g[17], HLEFT|VTOP, 1636, 705, 0, $g[15], "memory\ndata-in")
				new Txt($g[0], $g[17], HLEFT|VTOP, 1663, 220, 0, $g[15], "memory\ndata-out")
				new Txt($g[0], 0, HLEFT|VTOP, 1744, 77, 0, $g[15], "Data\nCache\n(memory)")
				$g[157] = newArray(4)
				$g[157][0]=new Register(1514, 66, 108, 44, LEFT, "M0")
				$g[157][1]=new Register(1514, 110, 108, 44, LEFT, "M1")
				$g[157][2]=new Register(1623, 66, 108, 44, RIGHT, "M2")
				$g[157][3]=new Register(1623, 110, 108, 44, RIGHT, "M3")
				$g[158] = new Component(1704, 463, 27, 88, "mux 9")
				$g[159] = new AnimPipe()
				$g[159].addPoint(1568, 860)
				$g[159].addPoint(1785, 860)
				$g[160] = new AnimPipe()
				$g[160].addPoint(1568, 507)
				$g[160].addPoint(1704, 507)
				$g[161] = new AnimPipe()
				$g[161].addPoint(1731, 507)
				$g[161].addPoint(1785, 507)
				$g[162] = new AnimPipe()
				$g[162].addPoint(1568, 507)
				$g[162].addPoint(1595, 507)
				$g[162].addPoint(1595, 154)
				$g[163] = new AnimPipe()
				$g[163].addPoint(1595, 727)
				$g[163].addPoint(1623, 727)
				$g[163].addPoint(1623, 154)
				$g[164] = new AnimPipe()
				$g[164].addPoint(1650, 154)
				$g[164].addPoint(1650, 485)
				$g[164].addPoint(1704, 485)
				$g[165] = new InstructionRegister(1785, 771, 54, 187, "WB")
				$g[166] = new Register(1785, 463, 54, 88, TOP, "O1")
				$g[167] = new AnimPipe()
				$g[167].addPoint(1839, 507)
				$g[167].addPoint(1866, 507)
				$g[167].addPoint(1866, 22)
				$g[167].addPoint(960, 22)
				$g[167].addPoint(960, 66)
				$g[138].txtResult.moveToFront()
				resetCircuit()
				$g[170] = ""
				$g[168]=0
				$pc = 2
			case 2:
				if (!($g[168]<32)) {
					$pc = 4
					continue
				}
				$g[71].setOpcode(4*$g[168], 0)
				$pc = 3
			case 3:
				$g[168]++
				$pc = 2
				continue
			case 4:
				$g[168]=0
				$pc = 5
			case 5:
				if (!($g[168]<4)) {
					$pc = 7
					continue
				}
				$g[170]=sprintf("r%d", $g[168])
				$g[95][$g[168]].setValue(getArgAsNum($g[170], 0))
				$pc = 6
			case 6:
				$g[168]++
				$pc = 5
				continue
			case 7:
				$g[168]=0
				$pc = 8
			case 8:
				if (!($g[168]<4)) {
					$pc = 10
					continue
				}
				$g[170]=sprintf("m%d", $g[168])
				$g[157][$g[168]].setValue(getArgAsNum($g[170], 0))
				$pc = 9
			case 9:
				$g[168]++
				$pc = 8
				continue
			case 10:
				setTPS(20)
				$g[14]=getArgAsNum("example", 0)
				if (!($g[14]==0)) {
					$pc = 14
					continue
				}
				$g[168]=0
				$pc = 11
			case 11:
				if (!($g[168]<32)) {
					$pc = 13
					continue
				}
				$g[170]=sprintf("i%d", $g[168])
				$g[71].setOpcode(4*$g[168], getArgAsNum($g[170], 0))
				$pc = 12
			case 12:
				$g[168]++
				$pc = 11
				continue
			case 13:
				$pc = 24
				continue
			case 14:
				if (!($g[14]==1)) {
					$pc = 15
					continue
				}
				$g[71].setValue(0, XOR, 1, 1, 1)
				$g[71].setValue(4, BEQZ, 0, 2, 36)
				$g[71].setValue(8, ST, 2, 0, 0)
				$g[71].setValue(12, ANDi, 2, 2, 1)
				$g[71].setValue(16, BEQZ, 0, 2, 8)
				$g[71].setValue(20, ADD, 1, 1, 3)
				$g[71].setValue(24, LD, 2, 0, 0)
				$g[71].setValue(28, SRLi, 2, 2, 1)
				$g[71].setValue(32, SLLi, 3, 3, 1)
				$g[71].setValue(36, J, 0, 0, 4-36)
				$g[71].setValue(40, ST, 1, 0, 0)
				$g[71].setValue(44, HALT, 0, 0, 0)
				$g[95][2].setValue(9)
				$g[95][3].setValue(8)
				setTPS(100)
				$pc = 23
				continue
			case 15:
				if (!($g[14]==2)) {
					$pc = 16
					continue
				}
				$g[71].setValue(0, ADD, 1, 2, 3)
				$g[71].setValue(4, SUB, 3, 1, 2)
				$g[71].setValue(8, AND, 2, 1, 3)
				$g[71].setValue(12, XOR, 2, 1, 3)
				$g[71].setValue(16, ADD, 2, 1, 0)
				$g[71].setValue(20, HALT, 0, 0, 0)
				$g[95][1].setValue(1)
				$g[95][2].setValue(2)
				setTPS(50)
				$pc = 22
				continue
			case 16:
				if (!($g[14]==3)) {
					$pc = 17
					continue
				}
				$g[71].setValue(0, ADD, 1, 1, 2)
				$g[71].setValue(4, ADD, 2, 1, 2)
				$g[71].setValue(8, ADD, 1, 1, 2)
				$g[71].setValue(12, ADD, 2, 1, 2)
				$g[71].setValue(16, ADD, 1, 1, 2)
				$g[71].setValue(20, HALT, 0, 0, 0)
				$g[95][1].setValue(1)
				$g[95][2].setValue(2)
				setTPS(50)
				$pc = 21
				continue
			case 17:
				if (!($g[14]==4)) {
					$pc = 18
					continue
				}
				$g[71].setValue(0, ADDi, 1, 0, 3)
				$g[71].setValue(4, ADD, 0, 0, 0)
				$g[71].setValue(8, ADD, 0, 0, 0)
				$g[71].setValue(12, SUBi, 1, 1, 1)
				$g[71].setValue(16, BNEZ, 0, 1, -12&255)
				$g[71].setValue(20, HALT, 0, 0, 0)
				setTPS(50)
				$pc = 20
				continue
			case 18:
				if (!($g[14]==5)) {
					$pc = 19
					continue
				}
				$g[71].setValue(0, JR, 0, 0, 1)
				$g[71].setValue(32, ADD, 1, 1, 1)
				$g[71].setValue(36, HALT, 0, 0, 0)
				$g[95][1].setValue(32)
				$pc = 19
			case 19:
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
				if (!($g[14]>0)) {
					$pc = 28
					continue
				}
				$g[168]=0
				$pc = 25
			case 25:
				if (!($g[168]<32)) {
					$pc = 27
					continue
				}
				$g[170]=sprintf("i%d", $g[168])
				setArg($g[170], $g[71].getOpcode($g[168]*4).toString())
				$pc = 26
			case 26:
				$g[168]++
				$pc = 25
				continue
			case 27:
				$g[14]=($g[14]>maxexample) ? 0 : $g[14]
				$pc = 28
			case 28:
				$g[171] = getArgAsNum("haltOnHalt", 1)
				$g[27]=getArgAsNum("bpMode", 0)
				setBPMode($g[27])
				$g[28]=getArgAsNum("liMode", 0)
				setLIMode($g[28])
				$g[29]=getArgAsNum("afMode", 0)
				setAFMode($g[29])
				$g[30]=getArgAsNum("sfMode", 0)
				setSFMode($g[30])
				$g[31]=getArgAsNum("zfMode", 0)
				setZFMode($g[31])
				$g[26]=getArgAsNum("peMode", 0)
				setPEMode($g[26])
				$g[22]=getArgAsNum("locked", 0)
				$g[172] = getArgAsNum("help", 1)
				$g[173] = new Rectangle2($g[0], $g[20], 0, 0, $g[12], 0, 0, WIDTH, HEIGHT)
				$g[173].setOpacity(0.5)
				$g[173].setRounded(27, 22)
				$g[174] = new SolidPen(SOLID, 2, RED, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[175] = new Font("Arial", 12, BOLD)
				new Txt($g[0], $g[20], HLEFT|VTOP, 32, 639, $g[174], $g[175], "LEFT CLICK on animation background to start and stop clock.\n\nSHIFT LEFT CLICK on background to execute \"single MIPS clock cycle\".")
				if (!(!$g[22])) {
					$pc = 29
					continue
				}
				$g[173]=new Rectangle2($g[0], $g[20], 0, $g[174], 0, 44, 184, 176, 10)
				$g[173].setRounded(5, 5)
				$g[173]=new Rectangle2($g[0], $g[20], 0, $g[174], 0, 55, 327, 66, 10)
				$g[173].setRounded(5, 5)
				$g[173]=new Rectangle2($g[0], $g[20], 0, $g[174], 0, 132, 327, 31, 10)
				$g[173].setRounded(5, 5)
				$g[173]=new Rectangle2($g[0], $g[20], 0, $g[174], 0, 168, 327, 31, 10)
				$g[173].setRounded(5, 5)
				$g[173]=new Rectangle2($g[0], $g[20], 0, $g[174], 0, 203, 327, 31, 10)
				$g[173].setRounded(5, 5)
				new Txt($g[0], $g[20], HLEFT|VTOP, 297, 132, $g[174], $g[175], "LEFT CLICK to change\ninitial program.")
				new Txt($g[0], $g[20], HLEFT|VTOP, 297, 231, $g[174], $g[175], "LEFT or RIGHT CLICK to \"rotate\"\ninstructions and operands.\nHold and release to reset value.")
				$pc = 29
			case 29:
				$g[173]=new Rectangle2($g[0], $g[20], 0, $g[174], 0, 683, 68, 198, 50)
				$g[173].setRounded(27, 22)
				new Txt($g[0], $g[20], HLEFT|VTOP, 1109, 88, $g[174], $g[175], "LEFT or RIGHT CLICK register\nto increment or decrement value.")
				if (!(!$g[22])) {
					$pc = 30
					continue
				}
				$g[173]=new Rectangle2($g[0], $g[20], 0, $g[174], 0, 242, 1230, 1212, 30)
				$g[173].setRounded(27, 22)
				new Txt($g[0], $g[20], HLEFT|VTOP, 487, 959, $g[174], $g[175], "LEFT CLICK on any of the buttons below to change circuit configuration.")
				$pc = 30
			case 30:
				$g[176] = new Rectangle2($g[0], $g[20], 0, $g[174], $g[13], 825, 507, 270, 66, $g[174], $g[175], "CLOSE HELP")
				$g[176].setRounded(5, 5)
				$g[176].addEventHandler("eventEE", this, $eh12)
				$g[176].addEventHandler("eventMB", this, $eh13)
				if (!($g[172]==0)) {
					$pc = 31
					continue
				}
				$g[20].setOpacity(0)
				$pc = 31
			case 31:
				$g[60].label.addEventHandler("eventMB", this, $eh14)
				$g[61].label.addEventHandler("eventMB", this, $eh15)
				$g[62].label.addEventHandler("eventMB", this, $eh16)
				$g[63].label.addEventHandler("eventMB", this, $eh17)
				$g[64].label.addEventHandler("eventMB", this, $eh18)
				$g[65].label.addEventHandler("eventMB", this, $eh19)
				$g[59].label.addEventHandler("eventMB", this, $eh20)
				$g[66].addEventHandler("eventMB", this, $eh21)
				$g[51].addEventHandler("eventMB", this, $eh22)
				$g[70].addEventHandler("eventEE", this, $eh23)
				$g[70].addEventHandler("eventMB", this, $eh24)
				callf(266, $obj)
				continue
			case 32:
				returnf(0)
				continue
			case 33:
				enterf(0);	// update
				$obj.vIns=$obj.nIns
				$obj.vRdt=$obj.nRdt
				$obj.vRs1=$obj.nRs1
				$obj.vRs2=$obj.nRs2
				$obj.txt=instrText($obj.vIns, $obj.vRdt, $obj.vRs1, $obj.vRs2)
				$obj.label.setTxt($obj.txt)
				$obj.r2.setBrush($g[13])
				if (wait(16))
				return
				$pc = 34
			case 34:
				$obj.r2.setBrush($g[12])
				returnf(0)
				continue
			case 35:
				enterf(0);	// update
				$obj.value=$obj.newValue
				$obj.tag=$obj.newTag
				$obj.updateLabel()
				$obj.bg1.setBrush($g[13])
				$obj.bg2.setBrush($g[13])
				if (wait(16))
				return
				$pc = 36
			case 36:
				$obj.bg1.setBrush($g[12])
				$obj.bg2.setBrush($g[12])
				returnf(0)
				continue
			case 37:
				enterf(5);	// animate
				$stack[$fp+1] = 0, $stack[$fp+3] = 0
				$stack[$fp+4] = 0
				$obj.calcLength()
				$obj.fgLine.setPt(0, $obj.px[0], $obj.py[0])
				$obj.fgLine.setPen($obj.fgPen0)
				$stack[$fp+5] = 1
				$pc = 38
			case 38:
				if (!($stack[$fp+5]<$obj.n)) {
					$pc = 41
					continue
				}
				$obj.fgLine.setPt($stack[$fp+5], $obj.px[$stack[$fp+5]-1], $obj.py[$stack[$fp+5]-1])
				$stack[$fp+1]+=$obj.ls[$stack[$fp+5]-1]
				$stack[$fp+2]=round($stack[$fp+1]*$stack[$fp-3]/$obj.ll)
				if ($obj.fgLine.setPt($stack[$fp+5], $obj.px[$stack[$fp+5]], $obj.py[$stack[$fp+5]], $stack[$fp+2]-$stack[$fp+3], 1, 1))
				return
				$pc = 39
			case 39:
				$stack[$fp+3]=$stack[$fp+2]
				$pc = 40
			case 40:
				$stack[$fp+5]++
				$pc = 38
				continue
			case 41:
				if (!($obj.head)) {
					$pc = 42
					continue
				}
				$obj.fgLine.setPen($obj.fgPen1)
				$pc = 42
			case 42:
				returnf(1)
				continue
			case 43:
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
				$pc = 44
			case 44:
				$obj.prev_clock.translate(-$obj.chw, 0, $stack[$fp+1], 1, 0)
				$obj.next_clock.translate(-$obj.chw, 0, $stack[$fp+1], 1, 0)
				$obj.dot.translate(0, $obj.ch, $stack[$fp+2], 1, 0)
				if (wait($stack[$fp+3]))
				return
				$pc = 45
			case 45:
				$obj.canUpdate=1
				$obj.prev_clock.translate(2*$obj.cw, 0)
				$obj.prev_clock.setPen($obj.stall ? ($obj.type ? $g[46] : $g[44]) : $g[45])
				if (wait($stack[$fp+2]*2))
				return
				$pc = 46
			case 46:
				$stack[$fp+4] = $obj.next_clock
				$obj.next_clock=$obj.prev_clock
				$obj.prev_clock=$stack[$fp+4]
				if (!($obj.stall)) {
					$pc = 47
					continue
				}
				$obj.stall--
				$pc = 47
			case 47:
				returnf(1)
				continue
			case 48:
				enterf(0);	// ifExec
				if (!(($g[23]==NO_STALL) || ($g[23]==CTRL_STALL))) {
					$pc = 49
					continue
				}
				fork(35, $g[73])
				$g[71].setActive($g[73].newValue)
				$pc = 49
			case 49:
				if (wait(8))
				return
				$pc = 50
			case 50:
				if (!(($g[27]==BRANCH_PREDICTION) && (btbIndex($g[73].value)!=-1))) {
					$pc = 51
					continue
				}
				$g[24]=btbIndex($g[73].value)
				$g[73].setNewValue($g[76][$g[24]].value)
				$g[177]=$g[84]
				$pc = 52
				continue
			case 51:
				$g[73].setNewValue(($g[73].value+4)&127)
				$g[177]=$g[86]
				$pc = 52
			case 52:
				$g[94].setNewValue($g[73].value)
				$g[93].setNewInstruction($g[71].instruction[$g[73].value/4])
				if (wait(8))
				return
				$pc = 53
			case 53:
				fork(37, $g[90], 64)
				fork(37, $g[82], 24)
				fork(37, $g[89], 24)
				if (!(($g[27]==BRANCH_PREDICTION) && (instrIsBranchOrJump($g[93].vIns)))) {
					$pc = 59
					continue
				}
				if (!($g[23]==CTRL_STALL)) {
					$pc = 55
					continue
				}
				callf(37, $g[88], 12)
				continue
			case 54:
				$pc = 57
				continue
			case 55:
				callf(37, $g[111], 12)
				continue
			case 56:
				$pc = 57
			case 57:
				callf(37, $g[91], 12)
				continue
			case 58:
				$pc = 61
				continue
			case 59:
				if (wait(24))
				return
				$pc = 60
			case 60:
				$pc = 61
			case 61:
				fork(37, $g[80], 40)
				if (!(($g[27]==BRANCH_PREDICTION) && (btbIndex($g[73].value)!=-1))) {
					$pc = 62
					continue
				}
				$g[75][btbIndex($g[73].value)].highlight($g[21])
				$g[76][btbIndex($g[73].value)].highlight($g[21])
				$pc = 62
			case 62:
				$g[81].setTxt($g[93].getNewInstrTxt())
				if ($g[81].setOpacity(1, 16, 1, 1))
				return
				$pc = 63
			case 63:
				callf(37, $g[177], 16)
				continue
			case 64:
				callf(37, $g[87], 8)
				continue
			case 65:
				returnf(0)
				continue
			case 66:
				enterf(0);	// sendBTBOperands
				callf(37, $g[179], 18)
				continue
			case 67:
				callf(37, $g[124], 6)
				continue
			case 68:
				returnf(0)
				continue
			case 69:
				enterf(1);	// idExec
				if (!($g[23]==NO_STALL)) {
					$pc = 70
					continue
				}
				fork(35, $g[94])
				fork(33, $g[93])
				$pc = 70
			case 70:
				if (!($g[25] && ($g[27]==BRANCH_PREDICTION))) {
					$pc = 71
					continue
				}
				fork(35, $g[75][$g[24]])
				fork(35, $g[76][$g[24]])
				$pc = 71
			case 71:
				if (wait(16))
				return
				$pc = 72
			case 72:
				fork(37, $g[92], 64)
				if (!(instrIsBranch($g[93].vIns))) {
					$pc = 75
					continue
				}
				fork(37, $g[113], 16)
				fork(37, $g[115], 16)
				fork(37, $g[114], 16)
				fork(37, $g[116], 16)
				if (wait(12))
				return
				$pc = 73
			case 73:
				$g[117].setTxt("%02X", $g[93].vRs2)
				$g[117].setOpacity(1)
				if (wait(4))
				return
				$pc = 74
			case 74:
				fork(37, $g[118], 8)
				fork(37, $g[120], 8)
				$g[119].setTxt("%02X", ($g[94].value+4)&255)
				$g[119].setOpacity(1, 8, 1, 0)
				$g[121].setTxt("%02X", ($g[94].value+$g[93].vRs2)&255)
				$g[121].setOpacity(1, 8, 1, 0)
				$pc = 88
				continue
			case 75:
				if (!(isJorJAL($g[93].vIns))) {
					$pc = 82
					continue
				}
				if (!($g[93].vIns==JAL)) {
					$pc = 76
					continue
				}
				fork(37, $g[113], 16)
				fork(37, $g[115], 16)
				$pc = 76
			case 76:
				if (!($g[23]==NO_STALL)) {
					$pc = 79
					continue
				}
				fork(37, $g[114], 16)
				fork(37, $g[116], 16)
				if (wait(12))
				return
				$pc = 77
			case 77:
				$g[117].setTxt("%02X", $g[93].vRs2)
				$g[117].setOpacity(1)
				if (wait(4))
				return
				$pc = 78
			case 78:
				fork(37, $g[120], 8)
				$g[121].setTxt("%02X", ($g[94].value+$g[93].vRs2)&255)
				$g[121].setOpacity(1, 8, 1, 0)
				$pc = 81
				continue
			case 79:
				if (wait(24))
				return
				$pc = 80
			case 80:
				$pc = 81
			case 81:
				$pc = 87
				continue
			case 82:
				if (!($g[93].vIns==JALR)) {
					$pc = 84
					continue
				}
				fork(37, $g[113], 32)
				fork(37, $g[115], 32)
				if (wait(24))
				return
				$pc = 83
			case 83:
				$pc = 86
				continue
			case 84:
				if (wait(24))
				return
				$pc = 85
			case 85:
				$pc = 86
			case 86:
				$pc = 87
			case 87:
				$pc = 88
			case 88:
				if (wait(9))
				return
				$pc = 89
			case 89:
				if (!(instrIsBranchOrJump($g[93].vIns))) {
					$pc = 90
					continue
				}
				calcNewPC()
				$pc = 90
			case 90:
				if (!(instrIsBranch($g[93].vIns))) {
					$pc = 91
					continue
				}
				$g[123].setTxt("%02X", $g[181])
				$g[123].setOpacity(1, 8, 1, 0)
				$pc = 91
			case 91:
				if (!(instrIsJumpR($g[93].vIns) && ($g[23]==NO_STALL))) {
					$pc = 92
					continue
				}
				$g[126].setTxt("%02X", $g[181])
				$g[126].setOpacity(1, 8, 1, 0)
				$pc = 92
			case 92:
				if (!(instrIsBranchOrJump($g[93].vIns))) {
					$pc = 93
					continue
				}
				fork(66, $obj)
				$pc = 93
			case 93:
				detectStall()
				if (!(instrIsBranchOrJump($g[93].vIns) && ($g[23]!=DATA_STALL))) {
					$pc = 94
					continue
				}
				updBTB()
				$pc = 94
			case 94:
				if (!($g[23]==NO_STALL)) {
					$pc = 95
					continue
				}
				$g[132].setNewValue($g[93].vIns, $g[93].vRdt, $g[93].vRs1, $g[93].vRs2)
				$pc = 96
				continue
			case 95:
				$g[132].setNewValue(STALL, 0, 0, 0)
				$pc = 96
			case 96:
				if (wait(7))
				return
				$pc = 97
			case 97:
				if (!(instrOpTypeRdt($g[93].vIns)==OP_TYPE_REG)) {
					$pc = 107
					continue
				}
				if (!(instrIsJumpAndLink($g[93].vIns))) {
					$pc = 100
					continue
				}
				$g[133].setNewValue(0)
				$g[134].setNewValue(($g[94].value+4)&127)
				callf(37, $g[112], 18)
				continue
			case 98:
				callf(37, $g[127], 6)
				continue
			case 99:
				$pc = 106
				continue
			case 100:
				$g[95][$g[93].vRs1].highlight($g[21])
				$g[133].setNewValue($g[95][$g[93].vRs1].value)
				if (!(instrOpTypeRs2($g[93].vIns)==OP_TYPE_REG)) {
					$pc = 101
					continue
				}
				$g[95][$g[93].vRs2].highlight($g[21])
				$g[134].setNewValue($g[95][$g[93].vRs2].value)
				$pc = 102
				continue
			case 101:
				$g[95][$g[93].vRdt].highlight($g[21])
				$g[134].setNewValue($g[95][$g[93].vRdt].value)
				$pc = 102
			case 102:
				$g[131].setTxt("R%d:%02X", $g[93].vRs1, $g[95][$g[93].vRs1].value)
				$g[131].setOpacity(1)
				fork(37, $g[130], 24)
				if (!((!instrIsArRI($g[93].vIns)) && ($g[93].vIns!=LD))) {
					$pc = 105
					continue
				}
				$stack[$fp+1] = ($g[93].vIns==ST) ? $g[93].vRdt : $g[93].vRs2
				$g[129].setTxt("R%d:%02X", $stack[$fp+1], $g[95][$stack[$fp+1]].value)
				$g[129].setOpacity(1)
				callf(37, $g[128], 18)
				continue
			case 103:
				callf(37, $g[127], 6)
				continue
			case 104:
				$pc = 105
			case 105:
				$pc = 106
			case 106:
				$pc = 107
			case 107:
				returnf(0)
				continue
			case 108:
				enterf(6);	// exExec
				fork(33, $g[132])
				if (!(!instrIsNop($g[132].nIns))) {
					$pc = 109
					continue
				}
				fork(35, $g[133])
				fork(35, $g[134])
				$pc = 109
			case 109:
				if (wait(8))
				return
				$pc = 110
			case 110:
				$g[154].setNewValue($g[132].vIns, $g[132].vRdt, $g[132].vRs1, $g[132].vRs2)
				if (!(instrOpTypeRdt($g[132].vIns)==OP_TYPE_REG)) {
					$pc = 132
					continue
				}
				if (!(instrIsJumpAndLink($g[132].vIns))) {
					$pc = 111
					continue
				}
				$stack[$fp+1]=0
				$stack[$fp+4]=0
				$pc = 118
				continue
			case 111:
				if (!($g[29]==ALU_FORWARDING)) {
					$pc = 116
					continue
				}
				if (!($g[155].tagMatches($g[132].vRs1))) {
					$pc = 112
					continue
				}
				$stack[$fp+1]=$g[140]
				$stack[$fp+4]=$g[155].value
				$pc = 115
				continue
			case 112:
				if (!($g[166].tagMatches($g[132].vRs1))) {
					$pc = 113
					continue
				}
				$stack[$fp+1]=$g[141]
				$stack[$fp+4]=$g[166].value
				$pc = 114
				continue
			case 113:
				$stack[$fp+1]=$g[142]
				$stack[$fp+4]=$g[133].value
				$pc = 114
			case 114:
				$pc = 115
			case 115:
				$pc = 117
				continue
			case 116:
				$stack[$fp+1]=$g[142]
				$stack[$fp+4]=$g[133].value
				$pc = 117
			case 117:
				$pc = 118
			case 118:
				if (!(instrIsJumpAndLink($g[132].vIns))) {
					$pc = 119
					continue
				}
				$stack[$fp+2]=$g[143]
				$stack[$fp+5]=$g[134].value
				$pc = 128
				continue
			case 119:
				if (!(instrOpTypeRs2($g[132].vIns)==OP_TYPE_IMM)) {
					$pc = 120
					continue
				}
				$stack[$fp+2]=$g[144]
				$stack[$fp+5]=$g[132].vRs2
				$pc = 127
				continue
			case 120:
				if (!($g[29]==ALU_FORWARDING)) {
					$pc = 125
					continue
				}
				if (!($g[155].tagMatches($g[132].vRs2))) {
					$pc = 121
					continue
				}
				$stack[$fp+2]=$g[147]
				$stack[$fp+5]=$g[155].value
				$pc = 124
				continue
			case 121:
				if (!($g[166].tagMatches($g[132].vRs2))) {
					$pc = 122
					continue
				}
				$stack[$fp+2]=$g[146]
				$stack[$fp+5]=$g[166].value
				$pc = 123
				continue
			case 122:
				$stack[$fp+2]=$g[143]
				$stack[$fp+5]=$g[134].value
				$pc = 123
			case 123:
				$pc = 124
			case 124:
				$pc = 126
				continue
			case 125:
				$stack[$fp+2]=$g[143]
				$stack[$fp+5]=$g[134].value
				$pc = 126
			case 126:
				$pc = 127
			case 127:
				$pc = 128
			case 128:
				$stack[$fp+6] = instrExecute($g[132].vIns, $stack[$fp+4], $stack[$fp+5])
				if (!($g[132].vRdt==0)) {
					$pc = 129
					continue
				}
				$stack[$fp+6]=0
				$pc = 129
			case 129:
				$g[155].setNewValue($stack[$fp+6])
				if (!(instrIsLoadOrStore($g[132].vIns))) {
					$pc = 130
					continue
				}
				$g[155].setNewTag(-1)
				$pc = 131
				continue
			case 130:
				$g[155].setNewTag($g[132].vRdt)
				$pc = 131
			case 131:
				$g[155].setInvalid(0)
				$pc = 134
				continue
			case 132:
				if (!($g[132].vIns==NOP)) {
					$pc = 133
					continue
				}
				$g[155].setInvalid(1)
				$g[155].updateLabel()
				$pc = 133
			case 133:
				$pc = 134
			case 134:
				if (!($g[132].vIns==ST)) {
					$pc = 141
					continue
				}
				if (!($g[30]==FORWARDING_TO_SMDR)) {
					$pc = 139
					continue
				}
				if (!($g[155].tagMatches($g[132].vRdt))) {
					$pc = 135
					continue
				}
				$stack[$fp+3]=$g[148]
				$g[156].setNewValue($g[155].value)
				$pc = 138
				continue
			case 135:
				if (!($g[166].tagMatches($g[132].vRdt))) {
					$pc = 136
					continue
				}
				$stack[$fp+3]=$g[149]
				$g[156].setNewValue($g[166].value)
				$pc = 137
				continue
			case 136:
				$stack[$fp+3]=$g[150]
				$g[156].setNewValue($g[134].value)
				$pc = 137
			case 137:
				$pc = 138
			case 138:
				$pc = 140
				continue
			case 139:
				$stack[$fp+3]=$g[150]
				$g[156].setNewValue($g[134].value)
				$pc = 140
			case 140:
				$pc = 141
			case 141:
				if (wait(8))
				return
				$pc = 142
			case 142:
				fork(37, $g[139], 64)
				if (!($g[132].vIns==ST)) {
					$pc = 143
					continue
				}
				fork(37, $stack[$fp+3], 24)
				$pc = 143
			case 143:
				if (!(instrOpTypeRdt($g[132].vIns)==OP_TYPE_REG)) {
					$pc = 146
					continue
				}
				if (!($stack[$fp+1]!=0)) {
					$pc = 144
					continue
				}
				fork(37, $stack[$fp+1], 24)
				$pc = 144
			case 144:
				if (!($stack[$fp+2]==$g[144])) {
					$pc = 145
					continue
				}
				$g[145].setTxt("%02X", $stack[$fp+5])
				$g[145].setOpacity(1)
				$pc = 145
			case 145:
				fork(37, $stack[$fp+2], 24)
				$pc = 146
			case 146:
				if (wait(24))
				return
				$pc = 147
			case 147:
				if (!($g[132].vIns==ST)) {
					$pc = 148
					continue
				}
				fork(37, $g[151], 40)
				$pc = 148
			case 148:
				if (!(instrOpTypeRdt($g[132].vIns)==OP_TYPE_REG)) {
					$pc = 151
					continue
				}
				$g[138].setTxtOp($g[132].vIns)
				if (!($stack[$fp+1]!=0)) {
					$pc = 149
					continue
				}
				fork(37, $g[152], 40)
				$pc = 149
			case 149:
				fork(37, $g[153], 40)
				if (wait(20))
				return
				$pc = 150
			case 150:
				$g[138].txtResult.setTxt("%02X", $stack[$fp+6])
				$g[138].txtResult.setOpacity(1, 20, 1, 0)
				$pc = 151
			case 151:
				returnf(0)
				continue
			case 152:
				enterf(0);	// maExec
				fork(33, $g[154])
				if (!(instrOpTypeRdt($g[154].nIns)==OP_TYPE_REG)) {
					$pc = 153
					continue
				}
				fork(35, $g[155])
				$pc = 153
			case 153:
				if (!($g[154].nIns==ST)) {
					$pc = 154
					continue
				}
				fork(35, $g[156])
				$pc = 154
			case 154:
				if (wait(8))
				return
				$pc = 155
			case 155:
				$g[165].setNewValue($g[154].vIns, $g[154].vRdt, $g[154].vRs1, $g[154].vRs2)
				if (!((instrOpTypeRdt($g[154].vIns)==OP_TYPE_REG) && ($g[154].vIns!=ST))) {
					$pc = 158
					continue
				}
				if (!($g[154].vIns==LD)) {
					$pc = 156
					continue
				}
				$g[166].setNewValue($g[157][$g[155].value%4].value)
				$g[166].setNewTag($g[154].vRdt)
				$pc = 157
				continue
			case 156:
				$g[166].setNewValue($g[155].value)
				$g[166].setNewTag($g[155].tag)
				$pc = 157
			case 157:
				$g[166].setInvalid(0)
				$pc = 158
			case 158:
				if (wait(8))
				return
				$pc = 159
			case 159:
				fork(37, $g[159], 64)
				if (!($g[154].vIns==ST)) {
					$pc = 162
					continue
				}
				$g[157][$g[155].value%4].setNewValue($g[156].value)
				fork(37, $g[163], 24)
				callf(37, $g[162], 24)
				continue
			case 160:
				callf(35, $g[157][$g[155].value%4])
				continue
			case 161:
				$pc = 170
				continue
			case 162:
				if (!(instrOpTypeRdt($g[154].vIns)==OP_TYPE_REG)) {
					$pc = 169
					continue
				}
				if (!($g[154].vIns==LD)) {
					$pc = 165
					continue
				}
				callf(37, $g[162], 24)
				continue
			case 163:
				$g[157][$g[155].value%4].highlight($g[21])
				callf(37, $g[164], 24)
				continue
			case 164:
				$pc = 167
				continue
			case 165:
				callf(37, $g[160], 48)
				continue
			case 166:
				$pc = 167
			case 167:
				callf(37, $g[161], 16)
				continue
			case 168:
				$pc = 169
			case 169:
				$pc = 170
			case 170:
				returnf(0)
				continue
			case 171:
				enterf(0);	// wbExec
				fork(33, $g[165])
				if (!((instrOpTypeRdt($g[165].nIns)==OP_TYPE_REG) && ($g[165].nIns!=ST))) {
					$pc = 172
					continue
				}
				fork(35, $g[166])
				$pc = 172
			case 172:
				if (wait(8))
				return
				$pc = 173
			case 173:
				if (!((instrOpTypeRdt($g[165].vIns)==OP_TYPE_REG) && ($g[165].vIns!=ST))) {
					$pc = 178
					continue
				}
				$g[95][$g[166].tag].setNewValue($g[166].value)
				if (wait(8))
				return
				$pc = 174
			case 174:
				callf(37, $g[167], 24)
				continue
			case 175:
				callf(35, $g[95][$g[166].tag])
				continue
			case 176:
				if (wait(19))
				return
				$pc = 177
			case 177:
				$pc = 180
				continue
			case 178:
				if (wait(67))
				return
				$pc = 179
			case 179:
				$pc = 180
			case 180:
				if (!($g[165].vIns!=STALL && $g[165].vIns!=EMPTY)) {
					$pc = 181
					continue
				}
				$g[33]++
				$g[68].setTxt("%4d", $g[33])
				$pc = 181
			case 181:
				$g[34]++
				$g[69].setTxt("%4d", $g[34])
				returnf(0)
				continue
			case 182:
				enterf(0);	// nonPipelinedBranch
				fork(37, $g[115], 24)
				fork(37, $g[116], 24)
				callf(37, $g[90], 12)
				continue
			case 183:
				fork(37, $g[113], 12)
				fork(37, $g[114], 12)
				if (wait(12))
				return
				$pc = 184
			case 184:
				if (!(instrIsJumpR($g[93].vIns))) {
					$pc = 186
					continue
				}
				$g[73].setNewValue(($g[95][$g[93].vRs2].value)&127)
				callf(37, $g[85], 34)
				continue
			case 185:
				$pc = 200
				continue
			case 186:
				if (!(instrIsBranch($g[93].vIns))) {
					$pc = 192
					continue
				}
				if (!(($g[95][$g[93].vRs1].value==0)==($g[93].vIns==BEQZ))) {
					$pc = 188
					continue
				}
				callf(37, $g[120], 20)
				continue
			case 187:
				$g[73].setNewValue(($g[73].value+$g[93].vRs2)&127)
				$pc = 190
				continue
			case 188:
				callf(37, $g[118], 20)
				continue
			case 189:
				$g[73].setNewValue(($g[73].value+4)&127)
				$pc = 190
			case 190:
				callf(37, $g[83], 14)
				continue
			case 191:
				$pc = 199
				continue
			case 192:
				if (!(isJorJAL($g[93].vIns))) {
					$pc = 195
					continue
				}
				$g[73].setNewValue(($g[73].value+$g[93].vRs2)&127)
				callf(37, $g[120], 20)
				continue
			case 193:
				callf(37, $g[83], 14)
				continue
			case 194:
				$pc = 198
				continue
			case 195:
				$g[73].setNewValue(($g[73].value+4)&127)
				callf(37, $g[118], 20)
				continue
			case 196:
				callf(37, $g[83], 14)
				continue
			case 197:
				$pc = 198
			case 198:
				$pc = 199
			case 199:
				$pc = 200
			case 200:
				callf(37, $g[87], 6)
				continue
			case 201:
				returnf(0)
				continue
			case 202:
				enterf(5);	// execNonPipelined
				callf(35, $g[73])
				continue
			case 203:
				$g[71].setActive($g[73].newValue)
				callf(37, $g[82], 24)
				continue
			case 204:
				callf(37, $g[80], 40)
				continue
			case 205:
				$g[93].setNewInstruction($g[71].instruction[$g[73].value/4])
				$g[81].setTxt($g[93].getNewInstrTxt())
				$g[81].translate(60/2+70, 0, 20, 1, 0)
				callf(33, $g[93])
				continue
			case 206:
				if (!((instrOpTypeRs2($g[93].vIns)==OP_TYPE_IMM) && (instrOpTypeRdt($g[93].vIns)==OP_TYPE_REG))) {
					$pc = 207
					continue
				}
				fork(37, $g[92], 64)
				$pc = 207
			case 207:
				fork(182, $obj)
				if (wait(24))
				return
				$pc = 208
			case 208:
				if (!(instrIsJumpAndLink($g[93].vIns))) {
					$pc = 211
					continue
				}
				callf(37, $g[112], 20)
				continue
			case 209:
				callf(37, $g[127], 20)
				continue
			case 210:
				$stack[$fp+1]=0
				$stack[$fp+2]=($g[73].value+4)&127
				$pc = 223
				continue
			case 211:
				if (!(instrOpTypeRdt($g[93].vIns)==OP_TYPE_REG)) {
					$pc = 220
					continue
				}
				$stack[$fp+1]=$g[95][$g[93].vRs1].value
				$g[95][$g[93].vRs1].highlight($g[21])
				$g[131].setTxt("R%d:%02X", $g[93].vRs1, $g[95][$g[93].vRs1].value)
				$g[131].setOpacity(1)
				fork(37, $g[130], 40)
				if (!((instrOpTypeRs2($g[93].vIns)==OP_TYPE_REG) || ($g[93].vIns==ST))) {
					$pc = 217
					continue
				}
				if (!(instrOpTypeRs2($g[93].vIns)==OP_TYPE_IMM)) {
					$pc = 212
					continue
				}
				$stack[$fp+2]=$g[95][$g[93].vRdt].value
				$g[95][$g[93].vRdt].highlight($g[21])
				$pc = 213
				continue
			case 212:
				$stack[$fp+2]=$g[95][$g[93].vRs2].value
				$g[95][$g[93].vRs2].highlight($g[21])
				$pc = 213
			case 213:
				if (!((!instrIsArRI($g[93].vIns)) && ($g[93].vIns!=LD))) {
					$pc = 216
					continue
				}
				$stack[$fp+5] = ($g[93].vIns==ST) ? $g[93].vRdt : $g[93].vRs2
				$g[129].setTxt("R%d:%02X", $stack[$fp+5], $g[95][$stack[$fp+5]].value)
				$g[129].setOpacity(1)
				callf(37, $g[128], 20)
				continue
			case 214:
				callf(37, $g[127], 20)
				continue
			case 215:
				$pc = 216
			case 216:
				$pc = 219
				continue
			case 217:
				if (wait(40))
				return
				$pc = 218
			case 218:
				$pc = 219
			case 219:
				$pc = 222
				continue
			case 220:
				if (wait(40))
				return
				$pc = 221
			case 221:
				$pc = 222
			case 222:
				$pc = 223
			case 223:
				if (!(instrOpTypeRdt($g[93].vIns)==OP_TYPE_REG)) {
					$pc = 224
					continue
				}
				$g[138].setTxtOp($g[93].vIns)
				$pc = 224
			case 224:
				if (!($g[93].vIns==ST)) {
					$pc = 227
					continue
				}
				fork(37, $g[150], 40)
				fork(37, $g[142], 40)
				$g[145].setTxt("%02X", $g[93].vRs2)
				$g[145].setOpacity(1)
				callf(37, $g[144], 40)
				continue
			case 225:
				fork(37, $g[151], 40)
				fork(37, $g[153], 40)
				callf(37, $g[152], 40)
				continue
			case 226:
				$stack[$fp+4]=$stack[$fp+2]
				$stack[$fp+3]=instrExecute($g[93].vIns, $stack[$fp+1], $g[93].vRs2)
				$pc = 240
				continue
			case 227:
				if (!(instrIsJumpAndLink($g[93].vIns))) {
					$pc = 230
					continue
				}
				callf(37, $g[143], 40)
				continue
			case 228:
				callf(37, $g[153], 40)
				continue
			case 229:
				$stack[$fp+3]=instrExecute($g[93].vIns, $stack[$fp+1], $stack[$fp+2])
				$pc = 239
				continue
			case 230:
				if (!(instrOpTypeRdt($g[93].vIns)==OP_TYPE_REG)) {
					$pc = 236
					continue
				}
				fork(37, $g[142], 40)
				if (!(instrOpTypeRs2($g[93].vIns)==OP_TYPE_IMM)) {
					$pc = 232
					continue
				}
				$g[145].setTxt("%02X", $g[93].vRs2)
				$g[145].setOpacity(1)
				callf(37, $g[144], 40)
				continue
			case 231:
				$stack[$fp+3]=instrExecute($g[93].vIns, $stack[$fp+1], $g[93].vRs2)
				$pc = 234
				continue
			case 232:
				callf(37, $g[143], 40)
				continue
			case 233:
				$stack[$fp+3]=instrExecute($g[93].vIns, $stack[$fp+1], $stack[$fp+2])
				$pc = 234
			case 234:
				fork(37, $g[153], 40)
				callf(37, $g[152], 40)
				continue
			case 235:
				$pc = 238
				continue
			case 236:
				if (wait(80))
				return
				$pc = 237
			case 237:
				$pc = 238
			case 238:
				$pc = 239
			case 239:
				$pc = 240
			case 240:
				if (!($g[93].vIns==LD)) {
					$pc = 244
					continue
				}
				callf(37, $g[162], 20)
				continue
			case 241:
				$g[157][($stack[$fp+3])%4].highlight($g[21])
				callf(37, $g[164], 20)
				continue
			case 242:
				callf(37, $g[161], 40)
				continue
			case 243:
				$stack[$fp+3]=$g[157][($stack[$fp+3])%4].value
				$pc = 254
				continue
			case 244:
				if (!($g[93].vIns==ST)) {
					$pc = 247
					continue
				}
				fork(37, $g[163], 20)
				callf(37, $g[162], 20)
				continue
			case 245:
				$g[157][($stack[$fp+3])%4].setNewValue($stack[$fp+4])
				callf(35, $g[157][($stack[$fp+3])%4])
				continue
			case 246:
				$pc = 253
				continue
			case 247:
				if (!(instrOpTypeRdt($g[93].vIns)==OP_TYPE_REG)) {
					$pc = 250
					continue
				}
				callf(37, $g[160], 40)
				continue
			case 248:
				callf(37, $g[161], 40)
				continue
			case 249:
				$pc = 252
				continue
			case 250:
				if (wait(80))
				return
				$pc = 251
			case 251:
				$pc = 252
			case 252:
				$pc = 253
			case 253:
				$pc = 254
			case 254:
				$g[95][0].unHighlight()
				$g[95][1].unHighlight()
				$g[95][2].unHighlight()
				$g[95][3].unHighlight()
				if (!((instrOpTypeRdt($g[93].vIns)==OP_TYPE_REG) && ($g[93].vIns!=ST))) {
					$pc = 258
					continue
				}
				callf(37, $g[167], 40)
				continue
			case 255:
				$g[95][$g[93].vRdt].setNewValue($stack[$fp+3])
				callf(35, $g[95][$g[93].vRdt])
				continue
			case 256:
				if (wait(19))
				return
				$pc = 257
			case 257:
				$pc = 260
				continue
			case 258:
				if (wait(75))
				return
				$pc = 259
			case 259:
				$pc = 260
			case 260:
				$g[34]+=5
				$g[33]++
				$g[68].setTxt("%4d", $g[33])
				$g[69].setTxt("%4d", $g[34])
				returnf(0)
				continue
			case 261:
				enterf(0);	// exec
				$g[95][0].unHighlight()
				$g[95][1].unHighlight()
				$g[95][2].unHighlight()
				$g[95][3].unHighlight()
				$g[157][0].unHighlight()
				$g[157][1].unHighlight()
				$g[157][2].unHighlight()
				$g[157][3].unHighlight()
				$g[75][0].unHighlight()
				$g[75][1].unHighlight()
				$g[76][0].unHighlight()
				$g[76][1].unHighlight()
				if (!($g[26]==PIPELINING_ENABLED)) {
					$pc = 262
					continue
				}
				fork(48, $obj)
				fork(69, $obj)
				fork(108, $obj)
				fork(152, $obj)
				fork(171, $obj)
				$pc = 263
				continue
			case 262:
				fork(202, $obj)
				$pc = 263
			case 263:
				if (wait(8))
				return
				$pc = 264
			case 264:
				resetWires()
				if (wait(($g[26]==PIPELINING_ENABLED) ? 72 : 392))
				return
				$pc = 265
			case 265:
				checkPoint()
				returnf(0)
				continue
			case 266:
				enterf(0);	// run
				if (wait(1))
				return
				$pc = 267
			case 267:
				$g[32]=1
				setlocked()
				$pc = 268
			case 268:
				if (!(1)) {
					$pc = 273
					continue
				}
				fork(43, $g[72], ($g[26]==PIPELINING_ENABLED) ? 80 : 400)
				callf(261, $obj)
				continue
			case 269:
				if (!((($g[165].vIns==HALT) && ($g[26]==PIPELINING_ENABLED)) || (($g[93].vIns==HALT) && ($g[26]==PIPELINING_DISABLED)))) {
					$pc = 271
					continue
				}
				stop()
				if (!($g[171])) {
					$pc = 270
					continue
				}
				$pc = 273
				continue
				$pc = 270
			case 270:
				$pc = 271
			case 271:
				if (wait(1))
				return
				$pc = 272
			case 272:
				$pc = 268
				continue
			case 273:
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
