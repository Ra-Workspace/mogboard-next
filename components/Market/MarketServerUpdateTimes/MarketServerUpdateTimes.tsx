import { t } from '@lingui/macro';
import RelativeTime from '@yaireo/relative-time';

interface MarketServerUpdateTimesProps {
  worlds: { id: number; name: string }[];
  uploadTimes: Record<number, { lastUploadTime: number }>;
}

export default function MarketServerUpdateTimes({
  worlds,
  uploadTimes,
}: MarketServerUpdateTimesProps) {
  const relativeTime = new RelativeTime();
  return (
    <div className="market_update_times">
      {worlds.map((world) => (
        <div key={world.id}>
          <h4>{world.name}</h4>
          <div>
            {uploadTimes[world.id].lastUploadTime
              ? relativeTime.from(new Date(uploadTimes[world.id].lastUploadTime))
              : t`No data`}
          </div>
        </div>
      ))}
    </div>
  );
}