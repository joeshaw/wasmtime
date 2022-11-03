window.SIDEBAR_ITEMS = {"constant":[["VERSION","Version number of this crate. "]],"enum":[["CodegenError","A compilation error."]],"macro":[["trace","Even when trace logging is disabled, the trace macro has a significant performance cost so we disable it by default."]],"mod":[["binemit","Binary machine code emission."],["cfg_printer","The `CFGPrinter` utility."],["cursor","Cursor library."],["data_value","This module gives users to instantiate values that Cranelift understands. These values are used, for example, during interpretation and for wrapping immediates."],["dbg","Debug tracing helpers."],["dominator_tree","A Dominator Tree represented as mappings of Blocks to their immediate dominator."],["flowgraph","A control flow graph represented as mappings of basic blocks to their predecessors and successors."],["incremental_cache","This module provides a set of primitives that allow implementing an incremental cache on top of Cranelift, making it possible to reuse previous compiled artifacts for functions that have been compiled previously."],["ir","Representation of Cranelift IR functions."],["isa","Instruction Set Architectures."],["loop_analysis","A loop analysis represented as mappings of loops to their header Block and parent in the loop tree."],["packed_option","Compact representation of `Option<T>` for types with a reserved value."],["print_errors","Utility routines for pretty-printing error messages."],["settings","Shared settings module."],["timing","Pass timing."],["verifier","A verifier for ensuring that functions are well formed. It verifies:"],["write","Converting Cranelift IR to text."]],"struct":[["CompileError","Compilation error, with the accompanying function to help printing it."],["Context","Persistent data structures and compilation pipeline."],["MachCallSite","A call site record resulting from a compilation."],["MachReloc","A relocation resulting from a compilation."],["MachSrcLoc","A source-location mapping resulting from a compilation."],["MachStackMap","Record of stack map metadata: stack offsets containing references."],["MachTrap","A trap record resulting from a compilation."],["ValueLocRange","Value location range."]],"trait":[["TextSectionBuilder","An object that can be used to create the text section of an executable."]],"type":[["CodegenResult","A convenient alias for a `Result` that uses `CodegenError` as the error type."],["CompiledCode","`CompiledCode` in its final form (i.e. after `FunctionParameters` have been applied), ready for consumption."],["ValueLabelsRanges","Resulting map of Value labels and their ranges/locations."]]};