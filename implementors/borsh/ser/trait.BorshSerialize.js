(function() {var implementors = {};
implementors["agnostic_orderbook"] = [{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"enum\" href=\"agnostic_orderbook/instruction/enum.AgnosticOrderbookInstruction.html\" title=\"enum agnostic_orderbook::instruction::AgnosticOrderbookInstruction\">AgnosticOrderbookInstruction</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"agnostic_orderbook/instruction/create_market/struct.Params.html\" title=\"struct agnostic_orderbook::instruction::create_market::Params\">Params</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"agnostic_orderbook/instruction/new_order/struct.Params.html\" title=\"struct agnostic_orderbook::instruction::new_order::Params\">Params</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"agnostic_orderbook/instruction/consume_events/struct.Params.html\" title=\"struct agnostic_orderbook::instruction::consume_events::Params\">Params</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"agnostic_orderbook/instruction/cancel_order/struct.Params.html\" title=\"struct agnostic_orderbook::instruction::cancel_order::Params\">Params</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,&nbsp;</span>","synthetic":false,"types":["agnostic_orderbook::instruction::AgnosticOrderbookInstruction"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"enum\" href=\"agnostic_orderbook/state/enum.AccountTag.html\" title=\"enum agnostic_orderbook::state::AccountTag\">AccountTag</a>","synthetic":false,"types":["agnostic_orderbook::state::AccountTag"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"enum\" href=\"agnostic_orderbook/state/enum.Side.html\" title=\"enum agnostic_orderbook::state::Side\">Side</a>","synthetic":false,"types":["agnostic_orderbook::state::Side"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"enum\" href=\"agnostic_orderbook/state/enum.SelfTradeBehavior.html\" title=\"enum agnostic_orderbook::state::SelfTradeBehavior\">SelfTradeBehavior</a>","synthetic":false,"types":["agnostic_orderbook::state::SelfTradeBehavior"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"agnostic_orderbook/state/struct.MarketState.html\" title=\"struct agnostic_orderbook::state::MarketState\">MarketState</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"agnostic_orderbook/state/enum.AccountTag.html\" title=\"enum agnostic_orderbook::state::AccountTag\">AccountTag</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"solana_program/pubkey/struct.Pubkey.html\" title=\"struct solana_program::pubkey::Pubkey\">Pubkey</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"solana_program/pubkey/struct.Pubkey.html\" title=\"struct solana_program::pubkey::Pubkey\">Pubkey</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"solana_program/pubkey/struct.Pubkey.html\" title=\"struct solana_program::pubkey::Pubkey\">Pubkey</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"solana_program/pubkey/struct.Pubkey.html\" title=\"struct solana_program::pubkey::Pubkey\">Pubkey</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,&nbsp;</span>","synthetic":false,"types":["agnostic_orderbook::state::MarketState"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"enum\" href=\"agnostic_orderbook/state/enum.Event.html\" title=\"enum agnostic_orderbook::state::Event\">Event</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"agnostic_orderbook/state/enum.Side.html\" title=\"enum agnostic_orderbook::state::Side\">Side</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u128.html\">u128</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a>&gt;: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a>&gt;: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"agnostic_orderbook/state/enum.Side.html\" title=\"enum agnostic_orderbook::state::Side\">Side</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u128.html\">u128</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html\">bool</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a>&gt;: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,&nbsp;</span>","synthetic":false,"types":["agnostic_orderbook::state::Event"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"agnostic_orderbook/state/struct.EventQueueHeader.html\" title=\"struct agnostic_orderbook::state::EventQueueHeader\">EventQueueHeader</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"agnostic_orderbook/state/enum.AccountTag.html\" title=\"enum agnostic_orderbook::state::AccountTag\">AccountTag</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u32.html\">u32</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,&nbsp;</span>","synthetic":false,"types":["agnostic_orderbook::state::EventQueueHeader"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"agnostic_orderbook/state/struct.OrderSummary.html\" title=\"struct agnostic_orderbook::state::OrderSummary\">OrderSummary</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u128.html\">u128</a>&gt;: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,&nbsp;</span>","synthetic":false,"types":["agnostic_orderbook::orderbook::OrderSummary"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"agnostic_orderbook/instruction/cancel_order/struct.Params.html\" title=\"struct agnostic_orderbook::instruction::cancel_order::Params\">Params</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u128.html\">u128</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,&nbsp;</span>","synthetic":false,"types":["agnostic_orderbook::processor::cancel_order::Params"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"agnostic_orderbook/instruction/close_market/struct.Params.html\" title=\"struct agnostic_orderbook::instruction::close_market::Params\">Params</a>","synthetic":false,"types":["agnostic_orderbook::processor::close_market::Params"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"agnostic_orderbook/instruction/consume_events/struct.Params.html\" title=\"struct agnostic_orderbook::instruction::consume_events::Params\">Params</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,&nbsp;</span>","synthetic":false,"types":["agnostic_orderbook::processor::consume_events::Params"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"agnostic_orderbook/instruction/create_market/struct.Params.html\" title=\"struct agnostic_orderbook::instruction::create_market::Params\">Params</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"solana_program/pubkey/struct.Pubkey.html\" title=\"struct solana_program::pubkey::Pubkey\">Pubkey</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,&nbsp;</span>","synthetic":false,"types":["agnostic_orderbook::processor::create_market::Params"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"agnostic_orderbook/instruction/new_order/struct.Params.html\" title=\"struct agnostic_orderbook::instruction::new_order::Params\">Params</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"agnostic_orderbook/state/enum.Side.html\" title=\"enum agnostic_orderbook::state::Side\">Side</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a>&gt;: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html\">bool</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html\">bool</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"agnostic_orderbook/state/enum.SelfTradeBehavior.html\" title=\"enum agnostic_orderbook::state::SelfTradeBehavior\">SelfTradeBehavior</a>: <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a>,&nbsp;</span>","synthetic":false,"types":["agnostic_orderbook::processor::new_order::Params"]}];
implementors["borsh"] = [];
implementors["solana_program"] = [{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"solana_program/hash/struct.Hash.html\" title=\"struct solana_program::hash::Hash\">Hash</a>","synthetic":false,"types":["solana_program::hash::Hash"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"solana_program/keccak/struct.Hash.html\" title=\"struct solana_program::keccak::Hash\">Hash</a>","synthetic":false,"types":["solana_program::keccak::Hash"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"solana_program/pubkey/struct.Pubkey.html\" title=\"struct solana_program::pubkey::Pubkey\">Pubkey</a>","synthetic":false,"types":["solana_program::pubkey::Pubkey"]},{"text":"impl <a class=\"trait\" href=\"borsh/ser/trait.BorshSerialize.html\" title=\"trait borsh::ser::BorshSerialize\">BorshSerialize</a> for <a class=\"struct\" href=\"solana_program/secp256k1_recover/struct.Secp256k1Pubkey.html\" title=\"struct solana_program::secp256k1_recover::Secp256k1Pubkey\">Secp256k1Pubkey</a>","synthetic":false,"types":["solana_program::secp256k1_recover::Secp256k1Pubkey"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()