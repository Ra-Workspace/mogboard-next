import { Trans } from '@lingui/macro';
import { DoctrineArray } from '../../../db/DoctrineArray';
import { Item } from '../../../types/game/Item';
import { UserList } from '../../../types/universalis/user';
import GameItemIcon from '../../GameItemIcon/GameItemIcon';
import ItemHeader from '../../ItemHeader/ItemHeader';
import Tooltip from '../../Tooltip/Tooltip';
import ListItemMarket from '../ListItemMarket/ListItemMarket';

interface ListItemProps {
  itemId: number;
  item: Item;
  listItemIds: number[];
  market: any;
  reqIsOwner: boolean;
  showHomeWorld: boolean;
  updateList: (args: Pick<UserList, 'items'>) => void;
}

export default function ListItem({
  itemId,
  item,
  listItemIds,
  market,
  reqIsOwner,
  showHomeWorld,
  updateList,
}: ListItemProps) {
  return (
    <div className="pl_i">
      <div>
        <GameItemIcon id={item.id} height={100} width={100} />
      </div>
      <div>
        <h2>
          <ItemHeader item={item} />
          {reqIsOwner && (
            <Tooltip
              label={
                <div style={{ textAlign: 'center', width: 140 }}>
                  <Trans>Remove item from list</Trans>
                </div>
              }
            >
              <a
                className="pl_remove"
                onClick={() => {
                  const newListItemIds = listItemIds;
                  newListItemIds.splice(newListItemIds.indexOf(itemId), 1);
                  const x = new DoctrineArray();
                  x.push(...newListItemIds);
                  updateList({ items: x });
                }}
              >
                <i className="xiv-NavigationClose"></i>
              </a>
            </Tooltip>
          )}
        </h2>
        <ListItemMarket item={item} market={market.items[itemId]} showHomeWorld={showHomeWorld} />
      </div>
    </div>
  );
}