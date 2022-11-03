window.SIDEBAR_ITEMS = {"constant":[["FLAG_MAY_ENTER","Flag for the `VMComponentContext::flags` field which corresponds to the canonical ABI flag `may_enter`"],["FLAG_MAY_LEAVE","Flag for the `VMComponentContext::flags` field which corresponds to the canonical ABI flag `may_leave`"],["FLAG_NEEDS_POST_RETURN","Flag for the `VMComponentContext::flags` field which is set whenever a function is called to indicate that `post_return` must be called next."],["MAX_FLAT_PARAMS","Canonical ABI-defined constant for the maximum number of “flat” parameters to a wasm function, or the maximum number of parameters a core wasm function will take for just the parameters used. Over this number the heap is used for transferring parameters."],["MAX_FLAT_RESULTS","Canonical ABI-defined constant for the maximum number of “flat” results. This number of results are returned directly from wasm and otherwise results are transferred through memory."],["VMCOMPONENT_MAGIC","Equivalent of `VMCONTEXT_MAGIC` except for components."]],"enum":[["ComponentItem","Equivalent of `EntityIndex` but for the component model instead of core wasm."],["CoreDef","Definition of a core wasm item and where it can come from within a component."],["Export","Possible exports from a component."],["ExportItem","An index at which to find an item within a runtime instance."],["FixedEncoding",""],["FlatType",""],["GlobalInitializer","GlobalInitializer instructions to get processed when instantiating a component"],["InstantiateModule","Different methods of instantiating a core wasm module."],["InterfaceType","All possible interface types that values can have."],["StringEncoding","Possible encodings of strings within the component model."],["Transcode","Possible transcoding operations that must be provided by the host."],["TypeDef","Types of imports and exports in the component model."]],"mod":[["dfg","A dataflow-graph-like intermediate representation of a component"]],"struct":[["Adapter","Metadata information about a fused adapter."],["AdapterOptions","Configuration options which can be specified as part of the canonical ABI in the component model."],["AlwaysTrap","Description of what to initialize when a `GlobalInitializer::AlwaysTrap` is encountered."],["CanonicalAbiInfo","Bye information about a type in the canonical ABI, with metadata for both memory32 and memory64-based types."],["CanonicalOptions","Canonical ABI options associated with a lifted or lowered function."],["Component","Run-time-type-information about a `Component`, its structure, and how to instantiate it."],["ComponentFuncIndex","Index within a component’s component function index space."],["ComponentIndex","Index within a component’s component index space."],["ComponentInstanceIndex","Index within a component’s component instance index space."],["ComponentTypeIndex","Index within a component’s component type index space."],["ComponentTypes","Runtime information about the type information contained within a component."],["ComponentTypesBuilder","Structured used to build a [`ComponentTypes`] during translation."],["ComponentUpvarIndex","Same as `ModuleUpvarIndex` but for components."],["CoreExport","Identifier of an exported item from a core WebAssembly module instance."],["ExtractMemory","Metadata for extraction of a memory of what’s being extracted and where it’s going."],["ExtractPostReturn","Same as `ExtractMemory` but for the `post-return` canonical option."],["ExtractRealloc","Same as `ExtractMemory` but for the `realloc` canonical option."],["FlatTypes","Flat representation of a type in just core wasm types."],["FuncIndex","Index type of a function (imported or defined) inside the WebAssembly module."],["GlobalIndex","Index type of a global variable (imported or defined) inside the WebAssembly module."],["ImportIndex","Used to index imports into a `Component`"],["LowerImport","Description of a lowered import used in conjunction with `GlobalInitializer::LowerImport`."],["LoweredIndex","Index that represents a lowered host function and is used to represent host function lowerings with options and such."],["MemoryIndex","Index type of a linear memory (imported or defined) inside the WebAssembly module."],["ModuleIndex","Index within a component’s module index space."],["ModuleInstanceIndex","Index within a component’s module instance index space."],["ModuleUpvarIndex","Index into a “closed over variables” list for components used to implement outer aliases. For more information on this see the documentation for the `LexicalScope` structure."],["RecordField","One field within a record."],["RuntimeAlwaysTrapIndex","Same as `LoweredIndex` but for the `CoreDef::AlwaysTrap` variant."],["RuntimeComponentInstanceIndex","Same as `RuntimeInstanceIndex` but tracks component instances instead."],["RuntimeImportIndex","Index that represents a leaf item imported into a component where a “leaf” means “not an instance”."],["RuntimeInstanceIndex","Index that represents a core wasm instance created at runtime."],["RuntimeMemoryIndex","Index representing a linear memory extracted from a wasm instance which is stored in a `VMComponentContext`. This is used to deduplicate references to the same linear memory where it’s only stored once in a `VMComponentContext`."],["RuntimeModuleIndex","Index that represents an exported module from a component since that’s currently the only use for saving the entire module state at runtime."],["RuntimePostReturnIndex","Same as `RuntimeMemoryIndex` except for the `post-return` function."],["RuntimeReallocIndex","Same as `RuntimeMemoryIndex` except for the `realloc` function."],["RuntimeTranscoderIndex","Index into the list of transcoders identified during compilation."],["StaticComponentIndex","Same as `StaticModuleIndex` but for components."],["StaticModuleIndex","Index into the global list of modules found within an entire component. Module translations are saved on the side to get fully compiled after the original component has finished being translated."],["TableIndex","Index type of a table (imported or defined) inside the WebAssembly module."],["Transcoder","Information about a string transcoding function required by an adapter module."],["Translator","Structure used to translate a component and parse it."],["TypeComponent","The type of a component in the component model."],["TypeComponentIndex","Index pointing to a component’s type (exports/imports with component-model types)"],["TypeComponentInstance","The type of a component instance in the component model, or an instantiated component."],["TypeComponentInstanceIndex","Index pointing to a component instance’s type (exports with component-model types, no imports)"],["TypeEnum","Shape of an “enum” type in interface types, not to be confused with a Rust `enum` type."],["TypeEnumIndex","Index pointing to an enum type in the component model."],["TypeFlags","Shape of a “flags” type in interface types."],["TypeFlagsIndex","Index pointing to a flags type in the component model."],["TypeFunc","A component function type in the component model."],["TypeFuncIndex","Index pointing to a component model function type with arguments/result as interface types."],["TypeIndex","Index type of a type inside the WebAssembly module."],["TypeList","Shape of a “list” interface type."],["TypeListIndex","Index pointing to a list type in the component model."],["TypeModule","The type of a module in the component model."],["TypeModuleIndex","Index pointing to a core wasm module’s type (exports/imports with core wasm types)"],["TypeOption","Shape of an “option” interface type."],["TypeOptionIndex","Index pointing to an option type in the component model (aka a `Option<T, E>`)"],["TypeRecord","Shape of a “record” type in interface types."],["TypeRecordIndex","Index pointing to a record type in the component model (aka a struct)."],["TypeResult","Shape of a “result” interface type."],["TypeResultIndex","Index pointing to an result type in the component model (aka a `Result<T, E>`)"],["TypeTuple","Shape of a “tuple” type in interface types."],["TypeTupleIndex","Index pointing to a tuple type in the component model."],["TypeUnion","Shape of a “union” type in interface types."],["TypeUnionIndex","Index pointing to a union type in the component model."],["TypeVariant","Shape of a “variant” type in interface types."],["TypeVariantIndex","Index pointing to a variant type in the component model (aka an enum)."],["VMComponentOffsets","Runtime offsets within a `VMComponentContext` for a specific component."],["VariantCase","One case of a `variant` type which contains the name of the variant as well as the payload."],["VariantInfo","ABI information about the representation of a variant."]],"trait":[["ComponentCompiler","Compilation support necessary for components."]]};