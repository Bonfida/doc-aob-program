initSidebarItems({"constant":[["EVENT_QUEUE_HEADER_LEN",""],["ORDER_ID_SIDE_FLAG","This byte flag is set for order_ids with side Bid, and unset for side Ask"],["ORDER_SUMMARY_SIZE","The serialized size of an OrderSummary object."]],"enum":[["AccountTag",""],["Event","Events are the primary output of the asset agnostic orderbook"],["SelfTradeBehavior","Describes what happens when two order with identical callback informations are matched together"],["Side",""]],"fn":[["get_side_from_order_id","This helper function deduces an order’s side from its order_id"]],"struct":[["EventQueue","The event queue account contains a serialized header and a circular buffer of serialized events."],["EventQueueHeader","Describes the current state of the event queue"],["MarketState","The orderbook market’s central state"],["OrderSummary","This struct is written back into the event queue’s register after new_order or cancel_order."]],"type":[["Register","The event queue register can hold arbitrary data returned by the AAOB. Currently only used to return [`OrderSummary`] objects."]]});