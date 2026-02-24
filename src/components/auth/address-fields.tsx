import { Input } from "@/components/ui/input";

interface AddressFieldsProps {
  street: string;
  zip: string;
  city: string;
  onChange: (field: "street" | "zip" | "city", value: string) => void;
  errors?: { street?: string; zip?: string; city?: string };
}

/**
 * Reusable address fields for registration forms.
 */
export function AddressFields({ street, zip, city, onChange, errors }: AddressFieldsProps) {
  return (
    <div className="space-y-4">
      <Input
        label="Straße & Hausnr."
        value={street}
        onChange={(e) => onChange("street", e.target.value)}
        placeholder="Musterstraße 12"
        error={errors?.street}
        required
      />
      <div className="grid grid-cols-3 gap-3">
        <Input
          label="PLZ"
          value={zip}
          onChange={(e) => onChange("zip", e.target.value)}
          placeholder="57647"
          maxLength={5}
          error={errors?.zip}
          required
        />
        <div className="col-span-2">
          <Input
            label="Ort"
            value={city}
            onChange={(e) => onChange("city", e.target.value)}
            placeholder="Nistertal"
            error={errors?.city}
            required
          />
        </div>
      </div>
    </div>
  );
}
